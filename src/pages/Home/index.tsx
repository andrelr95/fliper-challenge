import React from 'react';
import 'styled-components/macro';

import { Wrapper } from './styles';

const Home = () => {
  return (
    <Wrapper>
      <div
        id="card"
        css={`
          width: 345px;
          height: 352px;
          padding: 25px 24px;
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
            margin-bottom: 14px;
          `}
        >
          <span>Seu resumo</span>
          <div>@</div>
        </div>
        <div
          id="card-body"
          css={`
            display: flex;
          `}
        >
          <div
            css={`
              height: 250px;
              display: flex;
            `}
          >
            <span>Body</span>
          </div>
        </div>
        <hr
          css={`
            background-color: #9aa3bc;
            color: #9aa3bc;
          `}
        />
        <div
          id="card-footer"
          css={`
            display: flex;
            margin-top: 14px;
          `}
        >
          <span>FOOTER</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
