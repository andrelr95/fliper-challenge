import React from 'react';
import 'styled-components/macro';

import LoadingSkeleton from './Loading';

import { CardProps } from './types';

import * as S from './styles';

const Card: React.FC<CardProps> = ({
  children,
  footer,
  header,
  loading = false,
  ...rest
}) => {
  return (
    <S.Card {...rest}>
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <>
          {header && <S.CardHeader>{header}</S.CardHeader>}
          <S.CardBody>{children}</S.CardBody>
          <S.Divisor />
          {footer && <S.CardFooter>{footer}</S.CardFooter>}
        </>
      )}
    </S.Card>
  );
};

export default Card;
