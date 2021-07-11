import { createGlobalStyle } from 'styled-components';

import MilliardMedium from 'assets/fonts/MilliardMedium/Milliard-Medium.ttf';
import MetropolisBold from 'assets/fonts/MetropolisBold/Metropolis-Bold.ttf';
import MetropolisExtraBold from 'assets/fonts/MetropolisExtraBold/Metropolis-Extra-Bold.ttf';

export default createGlobalStyle`

  @font-face {
    font-family: 'Milliard Medium';
    src: url(${MilliardMedium});
  }

  @font-face {
    font-family: 'Metropolis Bold';
    src: url(${MetropolisBold});
  }

  @font-face {
    font-family: 'Metropolis Extra Bold';
    src: url(${MetropolisExtraBold});
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Milliard Medium', fantasy;

    html, body {
      height: 100vh;
      width: 100vw;
    }

    #root {
      height: inherit;
    }
    
  }
`;
