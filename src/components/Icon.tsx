import React, { ComponentType, useMemo } from 'react';

import { TouchableOpacityProps } from 'react-native';

import { BoxProps, useTheme, VariantProps } from '@shopify/restyle';

import { Color } from '@theme/colors';
import { Theme } from '@theme/restyle';

import { useVariant } from '@hooks/useVariant';

import { Box, TouchableBox } from './Box';

interface BaseIconProps extends BoxProps<Theme, true>, VariantProps<Theme, 'Icon'> {
    icon: ComponentType<IconProps>;
    size?: number;
    fill?: keyof Theme['colors'];
}
interface PressableIcon extends TouchableOpacityProps {
    pressable: true;
}

interface BoxIcon {
    pressable?: false;
}

export type WrappedIconProps = BaseIconProps & (PressableIcon | BoxIcon);

export function Icon({
    icon: WrappedIcon,
    size = 24,
    fill,
    variant,
    pressable,
    ...boxProps
}: WrappedIconProps) {
    const Wrapper = useMemo(() => (pressable ? TouchableBox : Box), [pressable]);
    const { style } = useVariant('Icon', variant);
    const { activeOpacity, colors } = useTheme<Theme>();
    const fillValue = colors[fill || Color.white];

    return (
        <Wrapper {...style} {...boxProps} activeOpacity={activeOpacity}>
            <WrappedIcon width={size} height={size} fill={fillValue} />
        </Wrapper>
    );
}
