import { ApolloClient, InMemoryCache } from '@apollo/client';

const BASE_URL = process.env.REACT_APP_GRAPHQL_ENDPOINT;
const SECRET = process.env.REACT_APP_GRAPHQL_SECRET;

const client = new ApolloClient({
  uri: BASE_URL,
  cache: new InMemoryCache(),
  headers: {
    'content-type': 'application/json',
    'x-hasura-admin-secret': SECRET || '',
  },
});

export default client;
