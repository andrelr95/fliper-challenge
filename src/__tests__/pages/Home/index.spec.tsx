import React from 'react';
import renderer from 'react-test-renderer';
import createStore from 'redux-mock-store';
import { ThemeProvider } from 'styled-components';
import { MockedProvider } from '@apollo/client/testing';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import theme from 'styles/theme';
import { WealthSummaryState } from 'store/modules/WealthSummary/wealth-summary.store';

import Home from 'pages/Home';
import { GET_WEALTH_SUMMARY } from 'services/WealthSummary/queries';

const INITIAL_STATE: WealthSummaryState = {
  cdi: 0,
  gain: 0,
  hasHistory: false,
  id: 0,
  profitability: 0,
  total: 0,
};

// const mocks = [
//   {
//     request: {
//       query: GET_WEALTH_SUMMARY,
//     },
//     result: {
//       data: {
//         wealthSummary: [
//           {
//             id: 2,
//             cdi: 3.45678,
//             gain: 1833.23,
//             hasHistory: true,
//             profitability: 2.76789,
//             total: 3200876,
//             __typename: 'wealthSummary',
//           },
//           {
//             id: 1,
//             cdi: 2,
//             gain: 400,
//             hasHistory: false,
//             profitability: 4.5,
//             total: 6470.1,
//             __typename: 'wealthSummary',
//           },
//         ],
//       },
//     },
//   },
// ]; // We'll fill this in next

const mockStore = createStore([]);
const store = mockStore(INITIAL_STATE);

describe('Home', () => {
  it('Renders correctly', async () => {
    const { act } = renderer;
    const wealthSummaryMock = {
      request: {
        query: GET_WEALTH_SUMMARY,
        variables: {},
      },
      result: {
        data: {
          wealthSummary: [
            {
              id: 2,
              cdi: 3.45678,
              gain: 1833.23,
              hasHistory: true,
              profitability: 2.76789,
              total: 3200876,
              __typename: 'wealthSummary',
            },
            {
              id: 1,
              cdi: 2,
              gain: 400,
              hasHistory: false,
              profitability: 4.5,
              total: 6470.1,
              __typename: 'wealthSummary',
            },
          ],
        },
      },
    };
    const tree = renderer
      .create(
        <Provider store={store}>
          <MockedProvider mocks={[wealthSummaryMock]} addTypename={false}>
            <ThemeProvider theme={theme}>
              <MemoryRouter>
                <Home />
              </MemoryRouter>
            </ThemeProvider>
          </MockedProvider>
        </Provider>,
      )
      .toJSON();
    await act(() => {
      return new Promise(resolve => setTimeout(resolve, 0));
    });
    expect(tree).toMatchSnapshot();
  });
});
