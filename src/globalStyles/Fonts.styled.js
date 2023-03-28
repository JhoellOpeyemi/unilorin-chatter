import { createGlobalStyle } from "styled-components";

import ForumFont from "../fonts/forum-regular-webfont.woff";

const FontStyles = createGlobalStyle`
@font-face {
    font-family: 'Forum';
    src: url(${ForumFont}) format('woff');
    
}
`;

export default FontStyles;
