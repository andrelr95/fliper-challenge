import React, { useContext } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { ThemeContext } from 'styled-components';
import 'styled-components/macro';

const LoadingSkeleton = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <div data-testid="card-loading-skeleton">
      <SkeletonTheme
        color={themeContext.colors.gray1}
        highlightColor={themeContext.colors.gray2}
      >
        <Skeleton
          height={30}
          width="100%"
          css={`
            margin-bottom: 14px;
          `}
        />
        <Skeleton
          height={90}
          width="100%"
          css={`
            margin-bottom: 14px;
          `}
        />
        <Skeleton
          height={24}
          count={3}
          width="100%"
          css={`
            margin-bottom: 2px;
          `}
        />
        <Skeleton
          height={60}
          count={1}
          width="100%"
          css={`
            margin: 16px 0;
          `}
        />
      </SkeletonTheme>
    </div>
  );
};

export default LoadingSkeleton;
