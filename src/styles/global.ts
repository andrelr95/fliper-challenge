import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Open Sans', sans-serif;

    html, body {
      height: 100vh;
      width: 100vw;
    }

    #root {
      height: inherit;
    }
    
  }
`;
