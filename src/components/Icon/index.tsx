import React from 'react';
import { themeColors } from 'styles/theme';
import { dict, IIconExporterProps } from './types';

export default ({
  name,
  color = 'darkGray',
  width = 24,
  height = 24,
  ...rest
}: IIconExporterProps) => {
  const SVGComponent = dict[name];
  return SVGComponent ? (
    <SVGComponent
      role="img"
      aria-label={name}
      fill={themeColors[color]}
      width={width}
      height={height}
      {...rest}
    />
  ) : null;
};
