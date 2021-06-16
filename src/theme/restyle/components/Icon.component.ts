import { Color } from '@theme/colors';
import { component } from '@theme/creator';

import { Radius, Spacing } from '../constants';

export const IconComponent = component('Icon', {
    p: Spacing.NONE,
    borderRadius: Radius.REGULAR,
})
    .variant('ghost', {
        p: Spacing.SMALL,
        backgroundColor: Color.blackLighter,
    })
    .seal();
