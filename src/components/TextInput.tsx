import { TextInput as RNTextInput, TextInputProps as RNTextInputProps } from 'react-native';

import {
    BaseTheme,
    color,
    ColorProps,
    createRestyleComponent,
    createVariant,
    opacity,
    OpacityProps,
    spacing,
    SpacingProps,
    spacingShorthand,
    SpacingShorthandProps,
    textShadow,
    typography,
    visible,
    border,
    BackgroundColorShorthandProps,
    BackgroundColorProps,
} from '@shopify/restyle';

import { Theme } from '@theme/restyle';

const variants = createVariant<Theme>({
    themeKey: 'TextInput',
});

export type TextInputProps<Theme extends BaseTheme> = ColorProps<Theme> &
    OpacityProps<Theme> &
    SpacingProps<Theme> &
    SpacingShorthandProps<Theme> &
    BackgroundColorProps<Theme> &
    BackgroundColorShorthandProps<Theme> &
    RNTextInputProps & { width: string };

export const TextInput = createRestyleComponent<TextInputProps<Theme>, Theme>(
    // @ts-ignore
    [spacing, spacingShorthand, color, visible, typography, textShadow, opacity, variants, border],
    RNTextInput
);
