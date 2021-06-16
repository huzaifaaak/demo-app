import { Color } from '@theme/colors';
import { component } from '@theme/creator';

import { Radius, Spacing } from '../constants';

export const BannerComponent = component('Banner', {
    backgroundColor: Color.blackLighter,
    color: Color.white,
    p: Spacing.SMALL,
    borderRadius: Radius.REGULAR,
})
    .variant('success', {
        backgroundColor: Color.greenLighter,
        color: Color.greenDarker,
    })
    .variant('info', {
        backgroundColor: Color.blueLighter,
        color: Color.blueDarker,
    })
    .variant('warning', {
        backgroundColor: Color.yellowLighter,
        color: Color.yellowDarker,
    })
    .variant('error', {
        backgroundColor: Color.redLighter,
        color: Color.redDarker,
    })
    .seal();
