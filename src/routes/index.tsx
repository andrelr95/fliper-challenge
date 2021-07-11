import React from 'react';
import { Route } from 'react-router-dom';

import { MainContent, ContentWrapper } from './styles';

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
      <h1>{title}</h1>
      <ContentWrapper>
        <Route exact={exact} component={component} path={path} />
      </ContentWrapper>
    </MainContent>
  );
};

export default DefaultRoute;
