/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import 'styled-components/macro';

import Icon from 'components/Icon';
import Button from 'components/Buttons';

import { GET_WEALTH_SUMMARY } from 'services/WealthSummary/queries';
import { WealthSummaryData } from 'services/WealthSummary/types';

import { Wrapper } from './styles';

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
          border: 1px solid #9aa3bc;
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
          <span>Seu resumo</span>
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
              padding: 16px 0 0;
              width: 100%;
            `}
          >
            <div
              css={`
                display: flex;
                flex-direction: column;
                align-items: center;
              `}
            >
              <span>Valor investido</span>
              <span>R$ 3.200.876,00</span>
            </div>
            <div
              css={`
                display: flex;
                flex-direction: column;
              `}
            >
              <div
                css={`
                  display: flex;
                  justify-content: space-between;
                `}
              >
                <span>Rentabilidade/mes</span>
                <span>2,767%</span>
              </div>
              <div
                css={`
                  display: flex;
                  justify-content: space-between;
                `}
              >
                <span>CDI</span>
                <span>3,45%</span>
              </div>
              <div
                css={`
                  display: flex;
                  justify-content: space-between;
                `}
              >
                <span>Ganho/mês</span>
                <span>R$ 1833,23</span>
              </div>
            </div>
          </div>
        </div>
        <hr
          css={`
            background-color: #9aa3bc;
            color: #9aa3bc;
            margin: 16px 0;
          `}
        />
        <div
          id="card-footer"
          css={`
            display: flex;
            justify-content: flex-end;
          `}
        >
          <Button color="primary" type="button">
            Ver Mais
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
