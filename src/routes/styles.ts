import styled from 'styled-components';

export const MainContent = styled.div.attrs(() => ({ id: 'main-content' }))`
  background-color: ${({ theme }) => theme.colors.grayBlue2};
  height: inherit;
  flex-direction: column;
  display: flex;
`;

export const ContentWrapper = styled.div`
  margin: 14px;
  height: 100%;
`;
