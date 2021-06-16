import { Color } from '@theme/colors';
import { component } from '@theme/creator';

import { Spacing } from '../constants';

export const HeaderComponent = component('Header', {
    back: {
        backgroundColor: Color.blackLighter,
        fill: Color.white,
        size: 24,
        p: Spacing.XSMALL,
    },
    title: {
        spacing: Spacing.SMALL,
    },
    action: {
        spacing: Spacing.SMALL,
        size: 20,
        backgroundColor: Color.blackLighter,
        p: Spacing.SMALL,
    },
}).seal();
