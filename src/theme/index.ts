import { DefaultTheme } from '@react-navigation/native';

import { colors } from './colors';
import { components } from './components';
import { Font as font } from './fonts';

export const Theme = {
    ...DefaultTheme,
    components,
    colors,
    font,
};
