'use client';

import BaseEditor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import { useState } from 'react';

import styles from './Editor.module.scss';

interface Props {
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

export const Editor: React.FC<Props> = ({ code, onChange }) => {
  const [codeState, setCurrentCode] = useState(code);

  // Use state if onChange handler not defined (uncontrolled input)
  const shownCode = onChange !== undefined ? code : codeState;
  const handleChange = onChange ?? setCurrentCode;

  return (
    <div className={styles['main-container']}>
      <div className={styles['container']}>
        <div className={styles['editor-wrapper']}>
          <BaseEditor
            value={shownCode}
            onValueChange={handleChange}
            highlight={(codeToHighlight) => highlight(codeToHighlight, languages.html, 'html')}
          />
        </div>

        <div className={styles['preview-wrapper']}>
          <iframe
            title="Live code editor preview"
            className={styles['preview-frame']}
            srcDoc={`
              ${previewBaseContent}
              ${shownCode}
            `}
          />
        </div>
      </div>
    </div>
  );
};
