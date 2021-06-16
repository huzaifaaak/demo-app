import { Color } from '@theme/colors';
import { component } from '@theme/creator';
import { Font } from '@theme/fonts';

export const MultilineComponent = component('Multiline', {
    backgroundColor: Color.blackLighter,
    color: Color.white,
    placeholderTextColor: Color.greyDark,
    minH: 72,
    labelText: {
        fontSize: 16,
        lineHeight: 23,
        color: Color.greyDark,
        fontFamily: Font.SEMI_BOLD,
    },
    redText: {
        color: Color.red,
        fontFamily: Font.REGULAR,
    },
}).seal();
