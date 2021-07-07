import { Color } from '@theme/colors';
import { component } from '@theme/creator';
import { Font } from '@theme/fonts';

import { Radius, Spacing } from '../constants';

export const TextInputComponent = component('TextInput', {
    height: 46,
    backgroundColor: Color.blackLighter,
    borderWidth: 1,
    borderColor: Color.transparent,
    borderRadius: Radius.REGULAR,
    px: Spacing.MEDIUM,
    input: {
        color: Color.white,
        placeholderTextColor: Color.greyDark,
    },
    required: {
        color: Color.red,
    },
    label: {
        fontFamily: Font.SEMI_BOLD,
        fontSize: 14,
        lineHeight: 21,
        color: Color.greyDark,
        mb: Spacing.XSMALL,
        px: Spacing.SMALL,
    },
    icon: {
        spacing: Spacing.MEDIUM,
        size: 20,
        color: Color.white,
        lineHeight: 20,
    },
    subtext: {
        color: Color.red,
    },
})
    .variant('error', {
        borderColor: Color.red,
    })
    .seal();
