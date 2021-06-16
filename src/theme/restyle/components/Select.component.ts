import { Color } from '@theme/colors';
import { component } from '@theme/creator';
import { Font } from '@theme/fonts';

import { Radius, Spacing } from '../constants';

export const SelectComponent = component('Select', {
    height: 46,
    backgroundColor: Color.blackLighter,
    borderWidth: 1,
    borderColor: Color.transparent,
    borderRadius: Radius.REGULAR,
    px: Spacing.MEDIUM,
    required: {
        color: Color.red,
    },
    placeholder: {
        color: Color.greyDark,
    },
    label: {
        fontFamily: Font.SEMI_BOLD,
        fontSize: 14,
        lineHeight: 21,
        color: Color.greyDark,
        mb: Spacing.XSMALL,
        px: Spacing.SMALL,
    },
    option: {
        px: Spacing.LARGE,
        py: Spacing.SMALL,
    },
})
    .variant('error', {
        borderColor: Color.red,
    })
    .seal();
