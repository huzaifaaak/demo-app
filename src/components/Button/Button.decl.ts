import { ReactNode } from 'react';

import { TouchableOpacityProps } from 'react-native';

import { SpacingProps, SpacingShorthandProps, VariantProps } from '@shopify/restyle';

import { Theme } from '@theme/restyle';

export interface ButtonProps
    extends SpacingProps<Theme>,
        SpacingShorthandProps<Theme>,
        TouchableOpacityProps,
        VariantProps<Theme, 'Button'> {
    children?: ReactNode;
}
