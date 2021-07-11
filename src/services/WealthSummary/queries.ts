import { gql } from '@apollo/client';

export const GET_WEALTH_SUMMARY = gql`
  {
    wealthSummary {
      id
      cdi
      gain
      hasHistory
      profitability
      total
    }
  }
`;
