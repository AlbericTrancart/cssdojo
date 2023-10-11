import { LiveEditor, LivePreview, LiveProvider } from 'react-live';
import BaseEditor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import { useState } from 'react';
import styled, { css } from 'styled-components';
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

export const editorStyles = css`
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

const EditorWrapper = styled.div`
  flex-basis: 100%;
  @media (min-width: ${mobileBreakpoint}) {
    flex-basis: 50%;
    flex-shrink: 1;
  }

  ${editorStyles}
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

export const PreviewFrame = styled.iframe`
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

export const previewBaseContent = `
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
</style>`;

export const Editor: React.FC<Props> = ({ useReact, code, onChange }) => {
  const [codeState, setCurrentCode] = useState(code);

  // Use state if onChange handler not defined (uncontrolled input)
  const shownCode = onChange !== undefined ? code : codeState;
  const handleChange = onChange ?? setCurrentCode;

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
              ${previewBaseContent}
              ${shownCode}
            `}
          />
        </PreviewWrapper>
      </Container>
    </MainContainer>
  );
};
