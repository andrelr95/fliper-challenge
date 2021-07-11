import styled from 'styled-components';
import Text from 'components/Text';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InvestedMoneyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
`;

export const InvestedMoneyLabel = styled(Text).attrs(() => ({
  color: 'darkGray',
  type: 'medium16',
}))`
  margin-bottom: 8px;
`;

export const InvestedMoneyValue = styled(Text).attrs(() => ({
  color: 'darkBlue',
  type: 'xbold22',
}))``;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
`;

export const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 24px;
  margin: 4px 0;
`;

export const DetailLabel = styled(Text).attrs(() => ({
  type: 'medium16',
  color: 'darkGray',
}))``;

export const DetailValue = styled(Text).attrs(() => ({
  type: 'xbold18',
  color: 'darkBlue',
}))``;
