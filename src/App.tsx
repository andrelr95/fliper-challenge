import React from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import DefaultRoute from 'routes';

import Home from 'pages/Home';
import Details from 'pages/Details';

import theme from 'styles/theme';
import GlobalStyle from 'styles/global';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <GlobalStyle />
        <Switch>
          <DefaultRoute path="/" exact component={Home} title="Dashboard" />
          <DefaultRoute
            path="/details"
            exact
            component={Details}
            title="Detalhes"
          />
        </Switch>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
