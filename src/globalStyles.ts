import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;
    }
    body {
      padding: 0;
      margin: 0;
      background-color: #E4E7EC;
      h1, h2, h3, h4, h5, h6, p {
        padding: 0;
        margin: 0;
      }
    }
  `

export default GlobalStyles