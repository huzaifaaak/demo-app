import { ReactNode } from 'react';

import { Text as RNText, TextProps as RNTextProps } from 'react-native';

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
    TextShadowProps,
    typography,
    TypographyProps,
    VariantProps,
    visible,
    VisibleProps,
} from '@shopify/restyle';

import { Theme } from '@theme/restyle';

const variants = createVariant<Theme>({
    themeKey: 'Text',
});

export type TextProps<Theme extends BaseTheme> = RNTextProps &
    ColorProps<Theme> &
    OpacityProps<Theme> &
    VisibleProps<Theme> &
    TypographyProps<Theme> &
    SpacingProps<Theme> &
    SpacingShorthandProps<Theme> &
    TextShadowProps<Theme> &
    VariantProps<Theme, 'Text'> & { children: ReactNode };

export const Text = createRestyleComponent<TextProps<Theme>, Theme>(
    // @ts-ignore
    [spacing, spacingShorthand, color, visible, typography, textShadow, opacity, variants],
    RNText
);
