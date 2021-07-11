import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.darkBlue};
  box-shadow: ${({ theme }) => theme.shadows.light};
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 16px;
  text-transform: uppercase;
`;
