import {Theme} from '@react-navigation/native';

import {colors} from './colors';

export const navigationTheme: Theme = {
    dark: true,
    colors: {
        primary: colors.primary,
        text: colors.white,
        background: colors.blackDarker,
        card: colors.black,
        border: colors.blackLighter,
        notification: colors.green,
    },
};
