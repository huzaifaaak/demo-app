import { colors } from '../colors';
import { Font } from '../fonts';

import { Spacing, Radius, Breakpoints } from './constants';

export const baseTheme = {
    colors,
    Font,
    activeOpacity: 0.7,
    spacing: {
        [Spacing.NONE]: 0,
        [Spacing.XSMALL]: 4,
        [Spacing.SMALL]: 8,
        [Spacing.MEDIUM]: 12,
        [Spacing.LARGE]: 16,
        [Spacing.XLARGE]: 20,
    },
    borderRadii: {
        [Radius.SHARP]: 0,
        [Radius.REGULAR]: 10,
        [Radius.CURVED]: 20,
        [Radius.ROUNDED]: 999,
    },
    breakpoints: {
        [Breakpoints.PHONE]: 0,
        [Breakpoints.PHONE]: 768,
    },
};
