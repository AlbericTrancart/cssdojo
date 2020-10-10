import { ContextProps, LiveEditor, LivePreview, LiveProvider, withLive } from 'react-live';
import BaseEditor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colorPalette, getSpacing, typography } from 'stylesheet';

interface Props {
  useReact?: boolean;
  code: string;
  onChange?: (code: string) => void;
}

const MainContainer = styled.div`
  margin: ${getSpacing(4)} 0;
`;

const Container = styled.div`
  position: relative;
  width: ${getSpacing(120)};
  left: -${getSpacing(10)};
  display: flex;
`;

const EditorWrapper = styled.div`
  flex-basis: 50%;
  flex-shrink: 1;

  > * {
    ${typography.code}
  }
  /* stylelint-disable-next-line */
  textarea,
  pre {
    /* stylelint-disable-next-line */
    padding: 0 !important;
  }
`;

const PreviewWrapper = styled.div`
  flex-basis: 50%;
  flex-shrink: 1;
`;

const Divider = styled.div`
  width: 1px;
  flex-shrink: 0;
  background-color: ${colorPalette.lightGrey};
  margin: 0 ${getSpacing(2)};
`;

const ErrorZone = styled.pre`
  ${typography.small}
  margin-top: ${getSpacing(2)};
`;

interface ErrorProps {
  live?: ContextProps;
}

const BaseLiveError: React.FC<ErrorProps> = ({ live }) => <ErrorZone>{live?.error}</ErrorZone>;

const LiveError = withLive(BaseLiveError);

export const Editor: React.FC<Props> = ({ useReact, code, onChange }) => {
  const [codeState, setCurrentCode] = useState(code);

  // Use state if onChange handler not defined (uncontrolled input)
  const shownCode = onChange !== undefined ? code : codeState;
  const handleChange = onChange !== undefined ? onChange : setCurrentCode;

  if (useReact) {
    return (
      <MainContainer>
        <LiveProvider
          code={shownCode}
          theme={{ plain: {}, styles: [] }}
          scope={{ styled }}
          noInline
        >
          <Container>
            <EditorWrapper>
              <LiveEditor onChange={handleChange} />
            </EditorWrapper>

            <Divider />

            <PreviewWrapper>
              <LivePreview />
            </PreviewWrapper>
          </Container>
          <LiveError />
        </LiveProvider>
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      <Container>
        <EditorWrapper>
          <BaseEditor
            value={shownCode}
            onValueChange={handleChange}
            highlight={(codeToHighlight) => highlight(codeToHighlight, languages.html, 'html')}
          />
        </EditorWrapper>

        <Divider />

        <PreviewWrapper>
          {/* eslint-disable-next-line */}
          <div dangerouslySetInnerHTML={{ __html: shownCode }} />
        </PreviewWrapper>
      </Container>
    </MainContainer>
  );
};
