import React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import { HashRouter, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import client from 'config/apollo-graphql';

import Home from 'pages/Home';
import Details from 'pages/Details';

import theme from 'styles/theme';
import GlobalStyle from 'styles/global';

import DefaultRoute from 'routes';

import { store } from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
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
      </ApolloProvider>
    </Provider>
  );
};

export default App;
