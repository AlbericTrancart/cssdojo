import { createGlobalStyle } from 'styled-components';
import { colorPalette, typography } from 'stylesheet';

// We are resetting base HTML styles, using HTML tags is OK here
// stylelint-disable
export const CSSResets = createGlobalStyle`
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section, main {
        display: block;
    }

    html {
        height: 100vh;
        ${typography.main}
        color: ${colorPalette.darkGrey};
        padding: 0;
        margin: 0;
    }

    body, #__next {
        height: 100%;
        padding: 0;
        margin: 0;
    }

    input::-ms-clear {
        display: none;
        height: 0;
        width: 0;
    }

    * {
        box-sizing: border-box;
    }
`;
