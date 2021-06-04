import { colors } from './colors';
import { Font } from './fonts';

export const components = {
    Alert: {
        h: 38,
        width: 100,
        padding: 10,
        border: 5,
    },
    BottomSheet: {
        border: 10,
    },
    Pressable: {
        activeOpacity: 0.7,
        height: 46,
        paddingVertical: 8,
        paddingHorizontal: 10,
        width: 100,
        margin: 20,
    },
    Container: {
        bg: colors.transparent,
        padding: 20,
        margin: 20,
    },
    Text: {
        fontSize: 14,
        color: colors.white,
        fontFamily: Font.REGULAR,
        lineHeight: 21,
        regular: 16,
        small: 14,
        large: 24,
    },
    Header: {
        color: colors.white,
        fontSize: 24,
        fontFamily: Font.BOLD,
        bg: colors.transparent,
        textTransform: 'none',
        lineHeight: 36,
        spacing: 15,
        iconBgBorder: 10,
        iconBgHeight: 34,
        iconBgWidth: 34,
    },
    TextInput: {
        color: colors.white,
        placeholderTextColor: colors.grey,
        bg: colors.blackLighter,
        borderColor: colors.blackLighter,
        focusBorderColor: colors.primary,
        textAlignVertical: 'center',
        focusable: true,
        icon: {
            spacing: 10,
            size: 24,
            color: colors.white,
            weight: 'bold',
        },
        px: 15,
        py: 5,
        h: 46,
        borderRadius: 5,
        errorColor: colors.red,
    },
    Multiline: {
        color: colors.white,
        placeholderTextColor: colors.grey,
        bg: colors.blackLighter,
        borderColor: colors.blackLighter,
        focusBorderColor: colors.primary,
        textAlignVertical: 'top',
        focusable: true,
        p: 10,
        minH: 72,
        borderRadius: 5,
        errorColor: colors.red,
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
    TabBar: {
        height: 40,
    },
    product: {
        actionButtonHeight: 80,
    },
    ColorRandomizer: {
        h: 100,
        borderRadius: 5,
    },
};
