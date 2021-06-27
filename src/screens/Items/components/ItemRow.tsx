import React from 'react';

import { useTheme } from '@shopify/restyle';

import { TouchableBox } from '@components/Box';
import { Text } from '@components/Text';

import { Color } from '@theme/colors';
import { Theme } from '@theme/restyle';
import { Spacing, Radius } from '@theme/restyle/constants';

export function ItemRow({
    category: { color: borderLeftColor },
    name,
    price,
    isActive,
    currency,
}: {
    category: { color: string };
    name: string;
    price: number;
    isActive: boolean;
    currency: string;
}) {
    const { activeOpacity } = useTheme<Theme>();

    if (!isActive) {
        return null;
    }

    return (
        <TouchableBox
            backgroundColor={Color.black}
            borderLeftWidth={10}
            borderRadius={Radius.REGULAR}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            paddingRight={Spacing.SMALL}
            paddingTop={Spacing.LARGE}
            paddingBottom={Spacing.LARGE}
            paddingLeft={Spacing.LARGE}
            marginTop={Spacing.LARGE}
            activeOpacity={activeOpacity}
            style={{ borderLeftColor }}>
            <Text style={{ flexShrink: 1 }}>{name}</Text>
            <Text textAlign={'right'} style={{ flexShrink: 0 }}>
                {price}
                {` ${currency}`}
            </Text>
        </TouchableBox>
    );
}
