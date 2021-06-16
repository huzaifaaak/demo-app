import { DefaultTheme } from '@react-navigation/native';

import { colors } from './colors';
import { Font as font } from './fonts';
import { components } from './sc-components';

export const Theme = {
    ...DefaultTheme,
    components,
    colors,
    font,
};
