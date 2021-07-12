import styled from 'styled-components';

export const Card = styled.div.attrs(() => ({
  id: 'card',
}))`
  width: 345px;
  height: auto;
  padding: 24px;
  border-radius: 14px;

  ${({ theme }) => `
    background-color: ${theme.colors.white};
    box-shadow: ${theme.shadows.dark};
  `}
`;

export const CardHeader = styled.div.attrs(() => ({
  id: 'card-header',
}))`
  display: flex;
  margin-bottom: 16px;
  justify-content: space-between;
`;

export const CardBody = styled.div.attrs(() => ({
  id: 'card-body',
}))`
  display: flex;
`;

export const CardFooter = styled.div.attrs(() => ({
  id: 'card-footer',
}))`
  display: flex;
  justify-content: flex-end;
  padding-top: 8px;
`;

export const Divisor = styled.hr`
  border-top: 0.5px solid ${({ theme }) => theme.colors.grayBlue};
  color: #9aa3bc;
  margin: 8px 0;
`;
