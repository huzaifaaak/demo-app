import React, { useCallback } from 'react';

import { useTheme } from '@shopify/restyle';

import { TouchableBox } from '@components/Box';
import { Text } from '@components/Text';

import { Routes } from '@constants/routes';

import { Color } from '@theme/colors';
import { Theme } from '@theme/restyle';
import { Spacing, Radius } from '@theme/restyle/constants';

export function ItemRow({
    item,
    navigate,
    currency,
}: {
    item: {
        category: { color: string };
        name: string;
        price: number;
        isActive: boolean;
        currency: string;
        navigate: any;
        id: string;
    };
    navigate: (route: string, parms: any) => void;
    currency: string;
}) {
    const { activeOpacity } = useTheme<Theme>();

    const {
        id,
        category: { color: borderLeftColor },
        name,
        price,
        isActive,
    } = item;

    const viewItem = useCallback(() => navigate(Routes.App.VIEWITEM, { id, currency }), [
        navigate,
        id,
        currency,
    ]);

    if (!isActive) {
        return null;
    }

    return (
        <TouchableBox
            onPress={viewItem}
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
