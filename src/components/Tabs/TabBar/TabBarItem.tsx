import React from 'react';

import { TabBarItemProps } from 'react-native-tab-view';

import { Layout } from 'react-native-tab-view/lib/typescript/src/types';

import { TouchableBox } from '@components/Box';
import { Text } from '@components/Text';

import { Color } from '@theme/colors';

import { IRoute } from '../Tabs.decl';
import { getBorderRadius } from '../utils';

export interface TabBarItemOuterProps {
    activeKey: string;
    jumpTo(key: string): void;
    layout: Layout;
    activeOpacity?: number;
}

export interface TabBarItemInnerProps extends TabBarItemProps<IRoute> {
    key: string;
}

export const TabBarItem = ({ activeKey, layout, jumpTo, activeOpacity }: TabBarItemOuterProps) => ({
    key,
    route: { title, index, last, length },
}: TabBarItemInnerProps) => {
    const isTabActive = key === activeKey;
    const borderRadius = getBorderRadius(index, last);

    return (
        <TouchableBox
            {...borderRadius}
            height={40}
            width={layout?.width / length}
            backgroundColor={isTabActive ? Color.primary : Color.black}
            activeOpacity={activeOpacity}
            alignItems="center"
            justifyContent="center"
            key={key}
            onPress={() => jumpTo(key)}>
            <Text color={isTabActive ? 'white' : 'grey'}>{title}</Text>
        </TouchableBox>
    );
};
