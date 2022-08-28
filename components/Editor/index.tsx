import { ContextProps, LiveEditor, LivePreview, LiveProvider, withLive } from 'react-live';
import BaseEditor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import { useState } from 'react';
import styled from 'styled-components';
import { colorPalette, getSpacing, mobileBreakpoint, typography } from 'stylesheet';

const MainContainer = styled.div`
  margin: ${getSpacing(4)} 0;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  @media (min-width: ${mobileBreakpoint}) {
    width: ${getSpacing(120)};
    position: relative;
    left: -${getSpacing(10)};
    flex-wrap: nowrap;
  }
`;

const EditorWrapper = styled.div`
  flex-basis: 100%;
  @media (min-width: ${mobileBreakpoint}) {
    flex-basis: 50%;
    flex-shrink: 1;
  }

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
  min-height: ${getSpacing(20)};
  flex-basis: 100%;
  @media (min-width: ${mobileBreakpoint}) {
    flex-basis: 50%;
    flex-shrink: 1;
  }
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  margin: ${getSpacing(2)} 0;
  @media (min-width: ${mobileBreakpoint}) {
    width: 1px;
    height: auto;
    margin: 0 ${getSpacing(2)};
  }

  flex-shrink: 0;
  background-color: ${colorPalette.lightGrey};
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

const PreviewFrame = styled.iframe`
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  border: none;
  margin: 0;
  padding: 0;
`;

interface Props {
  useReact?: boolean;
  code: string;
  onChange?: (code: string) => void;
}

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
          <PreviewFrame
            srcDoc={`
              <link
                href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans"
                rel="stylesheet"
                type="text/css"
              />
              <style>
              html {
                font-family: IBM Plex Sans, sans-serif;
                font-size: 125%;
              }
              body {
                margin: 0;
                padding: 0;
              }
              </style>
              ${shownCode}
            `}
          />
        </PreviewWrapper>
      </Container>
    </MainContainer>
  );
};
