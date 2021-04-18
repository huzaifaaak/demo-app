import { colors } from './colors';
import { Font } from './fonts';

export const components = {
    Pressable: {
        activeOpacity: 0.7,
    },
    Container: {
        bg: colors.transparent,
        padding: 20,
    },
    Text: {
        fontSize: 14,
        color: colors.white,
        fontFamily: Font.REGULAR,
        lineHeight: 21,
    },
    Header: {
        color: colors.white,
        fontSize: 24,
        fontFamily: Font.BOLD,
        bg: colors.transparent,
        textTransform: 'none',
    },
    Input: {
        color: colors.white,
        placeholderTextColor: colors.grey,
        bg: colors.blackLighter,
        borderColor: colors.blackLighter,
        focusBorderColor: colors.primary,
        textAlignVertical: 'center',
        focusable: true,
        px: 20,
        h: 46,
        borderRadius: 5,
        errorColor: colors.red,
    },
    Textarea: {
        color: colors.white,
        placeholderTextColor: colors.grey,
        bg: colors.blackLighter,
        borderColor: colors.transparent,
        focusBorderColor: colors.primary,
    },
    Button: {
        color: colors.white,
        fontFamily: Font.SEMI_BOLD,
        bg: colors.primary,
        rounded: 5,
        focusable: true,
        borderless: true,
        block: true,
        h: 46,
    },
    Toggle: {
        circleBg: colors.white,
        activeCircleBg: colors.white,
        bg: colors.blackLighter,
        activeBg: colors.green,
    },
    Checkbox: {
        activeColor: colors.primary,
        inactiveColor: colors.blackLighter,
        bg: colors.blackLighter,
        borderColor: colors.transparent,
    },
    Select: {
        bg: colors.blackDark,
        borderColor: colors.transparent,
        roundedTop: 'xl',
    },
    SelectOption: {
        color: colors.white,
        bg: colors.transparent,
        px: 20,
    },
};
