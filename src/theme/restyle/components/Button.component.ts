import { Color } from '@theme/colors';
import { component } from '@theme/creator';

import { Radius, Spacing } from '../constants';

export const ButtonComponent = component('Button', {
    p: Spacing.SMALL,
    height: 46,
    fontSize: 16,
    lineHeight: 23,
    backgroundColor: Color.primary,
    color: Color.white,
    justifyContent: 'center',
    borderRadius: Radius.REGULAR,
})
    .variant('ghost', {
        backgroundColor: Color.blackLighter,
    })
    .variant('error', {
        backgroundColor: Color.red,
    })
    .variant('disabled', {
        backgroundColor: Color.greyDarker,
        opacity: 0.25,
    })
    .seal();
