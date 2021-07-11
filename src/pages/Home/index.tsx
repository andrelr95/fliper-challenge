/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import 'styled-components/macro';

import Icon from 'components/Icon';
import Button from 'components/Buttons';

import { GET_WEALTH_SUMMARY } from 'services/WealthSummary/queries';
import { WealthSummaryData } from 'services/WealthSummary/types';

import Text from 'components/Text';
import { InvestedMoneyText, Wrapper } from './styles';

const Home = () => {
  const { loading, data, error } =
    useQuery<WealthSummaryData>(GET_WEALTH_SUMMARY);

  useEffect(() => {
    if (loading) {
      console.log({ loading });
    }

    if (error) {
      console.log({ error });
    }

    if (data) {
      console.log({ data });
    }
  }, [loading, data, error]);
  return (
    <Wrapper>
      <div
        id="card"
        css={`
          width: 345px;
          height: auto;
          padding: 24px;
          border-radius: 14px;
          box-shadow: 1px 1px 1px #9aa3bc;
          background-color: #fff;
        `}
      >
        <div
          id="card-header"
          css={`
            display: flex;
            margin-bottom: 16px;
            justify-content: space-between;
          `}
        >
          <Text color="darkBlue" type="xbold25">
            Seu resumo
          </Text>
          <Icon name="options" />
        </div>
        <div
          id="card-body"
          css={`
            display: flex;
          `}
        >
          <div
            css={`
              display: flex;
              flex-direction: column;
              width: 100%;
            `}
          >
            <div
              css={`
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 16px 0;
              `}
            >
              <InvestedMoneyText color="darkGray" type="medium16">
                Valor investido
              </InvestedMoneyText>
              <Text color="darkBlue" type="xbold22">
                R$ 3.200.876,00
              </Text>
            </div>
            <div
              css={`
                display: flex;
                flex-direction: column;
                padding: 16px 0;
              `}
            >
              <div
                css={`
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  height: 24px;
                  margin: 4px 0;
                `}
              >
                <Text color="darkGray" type="medium16">
                  Rentabilidade/mês
                </Text>
                <Text color="darkBlue" type="xbold18">
                  2,767%
                </Text>
              </div>
              <div
                css={`
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  height: 24px;
                  margin: 4px 0;
                `}
              >
                <Text color="darkGray" type="medium16">
                  CDI
                </Text>
                <Text color="darkBlue" type="xbold18">
                  3,45%
                </Text>
              </div>
              <div
                css={`
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  height: 24px;
                  margin: 4px 0;
                `}
              >
                <Text color="darkGray" type="medium16">
                  Ganho/mês
                </Text>
                <Text color="darkBlue" type="xbold18">
                  R$ 1833,23
                </Text>
              </div>
            </div>
          </div>
        </div>
        <hr
          css={`
            border-top: 0.5px solid #9aa3bc;
            color: #9aa3bc;
            margin: 8px 0;
          `}
        />
        <div
          id="card-footer"
          css={`
            display: flex;
            justify-content: flex-end;
            padding-top: 16px;
          `}
        >
          <Button color="primary" type="button">
            <Text type="bold16" color="darkBlue">
              ver mais
            </Text>
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
