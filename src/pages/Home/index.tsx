/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useQuery } from '@apollo/client';
import 'styled-components/macro';

import Card from 'components/Card';
import Button from 'components/Button';

import { GET_WEALTH_SUMMARY } from 'services/WealthSummary/queries';
import { WealthSummaryData } from 'services/WealthSummary/types';

import Text from 'components/Text';
import Icon from 'components/Icon';
import {
  formatNumberToCurrencyString,
  formatNumberToPercentage,
} from 'helpers';

import * as S from './styles';

const Home = () => {
  const history = useHistory();
  const { loading, data, error } =
    useQuery<WealthSummaryData>(GET_WEALTH_SUMMARY);

  useEffect(() => {
    if (error) {
      console.log('card error', { error });
    }
  }, [error]);

  return (
    <S.Wrapper>
      <Card
        loading={loading}
        header={
          <>
            <Text color="darkBlue" type="xbold25">
              Seu resumo
            </Text>
            <Icon name="options" onClick={() => console.log('OPTIONS')} />
          </>
        }
        footer={
          <Button
            color="primary"
            type="button"
            onClick={() => history.push('/details')}
          >
            <Text type="bold16" color="darkBlue">
              ver mais
            </Text>
          </Button>
        }
      >
        {data && (
          <S.Content>
            <S.InvestedMoneyWrapper>
              <S.InvestedMoneyLabel>Valor investido</S.InvestedMoneyLabel>
              <S.InvestedMoneyValue>
                {formatNumberToCurrencyString(data.wealthSummary[0].total)}
              </S.InvestedMoneyValue>
            </S.InvestedMoneyWrapper>
            <S.DetailsWrapper>
              <S.Detail>
                <S.DetailLabel>Rentabilidade/mês</S.DetailLabel>
                <S.DetailValue>
                  {formatNumberToPercentage(
                    data.wealthSummary[0].profitability,
                    3,
                  )}
                </S.DetailValue>
              </S.Detail>
              <S.Detail>
                <S.DetailLabel>CDI</S.DetailLabel>
                <S.DetailValue>
                  {formatNumberToPercentage(data.wealthSummary[0].cdi, 2)}
                </S.DetailValue>
              </S.Detail>
              <S.Detail>
                <S.DetailLabel>Ganho/mês</S.DetailLabel>
                <S.DetailValue>
                  {formatNumberToCurrencyString(data.wealthSummary[0].gain)}
                </S.DetailValue>
              </S.Detail>
            </S.DetailsWrapper>
          </S.Content>
        )}
      </Card>
    </S.Wrapper>
  );
};

export default Home;
