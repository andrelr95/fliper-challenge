import Text from 'components/Text';
import React from 'react';
import { Route } from 'react-router-dom';

import { MainContent, ContentWrapper, TitleWrapper } from './styles';

interface DefaultRouteProps {
  path: string;
  title: string;
  component: React.ComponentType<any>;
  exact?: boolean;
}
const DefaultRoute = ({
  component,
  path,
  exact = false,
  title,
}: DefaultRouteProps) => {
  return (
    <MainContent>
      <TitleWrapper>
        <Text color="darkBlue" type="xbold25">
          {title}
        </Text>
      </TitleWrapper>
      <ContentWrapper>
        <Route exact={exact} component={component} path={path} />
      </ContentWrapper>
    </MainContent>
  );
};

export default DefaultRoute;
