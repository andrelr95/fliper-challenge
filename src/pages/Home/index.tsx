/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import 'styled-components/macro';

import Card from 'components/Card';
import Button from 'components/Button';

import { GET_WEALTH_SUMMARY } from 'services/WealthSummary/queries';
import { WealthSummary, WealthSummaryData } from 'services/WealthSummary/types';

import Text from 'components/Text';
import Icon from 'components/Icon';
import {
  formatNumberToCurrencyString,
  formatNumberToPercentage,
} from 'helpers';

import * as S from './styles';

const Home = () => {
  const { loading, data, error } =
    useQuery<WealthSummaryData>(GET_WEALTH_SUMMARY);

  const [wealthSummary, setWealthSummary] = useState<WealthSummary | null>(
    null,
  );

  useEffect(() => {
    if (loading) {
      console.log({ loading });
    }

    if (error) {
      console.log({ error });
    }

    if (data) {
      setWealthSummary({ ...data.wealthSummary[0] });
    }
  }, [loading, data, error, setWealthSummary]);

  return (
    <S.Wrapper>
      {wealthSummary && (
        <Card
          header={
            <>
              <Text color="darkBlue" type="xbold25">
                Seu resumo
              </Text>
              <Icon name="options" />
            </>
          }
          footer={
            <Button color="primary" type="button">
              <Text type="bold16" color="darkBlue">
                ver mais
              </Text>
            </Button>
          }
        >
          <S.Content>
            <S.InvestedMoneyWrapper>
              <S.InvestedMoneyLabel>Valor investido</S.InvestedMoneyLabel>
              <S.InvestedMoneyValue>
                {formatNumberToCurrencyString(wealthSummary.total)}
              </S.InvestedMoneyValue>
            </S.InvestedMoneyWrapper>
            <S.DetailsWrapper>
              <S.Detail>
                <S.DetailLabel>Rentabilidade/mês</S.DetailLabel>
                <S.DetailValue>
                  {formatNumberToPercentage(wealthSummary.profitability, 3)}
                </S.DetailValue>
              </S.Detail>
              <S.Detail>
                <S.DetailLabel>CDI</S.DetailLabel>
                <S.DetailValue>
                  {formatNumberToPercentage(wealthSummary.cdi, 2)}
                </S.DetailValue>
              </S.Detail>
              <S.Detail>
                <S.DetailLabel>Ganho/mês</S.DetailLabel>
                <S.DetailValue>
                  {formatNumberToCurrencyString(wealthSummary.gain)}
                </S.DetailValue>
              </S.Detail>
            </S.DetailsWrapper>
          </S.Content>
        </Card>
      )}
    </S.Wrapper>
  );
};

export default Home;
