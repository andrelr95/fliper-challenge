import styled from 'styled-components';
import Text from 'components/Text';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const InvestedMoneyText = styled(Text).attrs(() => ({
  color: 'darkGray',
  type: 'medium16',
}))`
  margin-bottom: 8px;
`;
