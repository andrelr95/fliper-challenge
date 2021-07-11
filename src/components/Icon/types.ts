import { themeColors } from 'styles/theme';
import { ReactComponent as options } from 'assets/icons/more-vert.svg';

export const dict = {
  options,
};

export interface IProps {
  name: keyof typeof dict;
  color?: keyof typeof themeColors;
}

export type IIconExporterProps = IProps & React.SVGAttributes<SVGElement>;
