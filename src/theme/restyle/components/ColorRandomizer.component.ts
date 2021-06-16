import { Color } from '@theme/colors';
import { component } from '@theme/creator';

import { Radius } from '../constants';

export const ColorRandomizerComponent = component('ColorRandomizer', {
    height: 100,
    backgroundColor: Color.primary,
    borderRadius: Radius.REGULAR,
    button: {
        width: 46,
        height: 46,
        backgroundColor: Color.blackLighter,
        borderTopLeftRadius: Radius.REGULAR,
        borderBottomRightRadius: Radius.REGULAR,
    },
}).seal();
