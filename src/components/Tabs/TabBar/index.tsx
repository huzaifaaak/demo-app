import React, { useMemo } from 'react';

import { SceneRendererProps, TabBar as RNTVTabBar } from 'react-native-tab-view';

import { useTheme } from '@shopify/restyle';

import { Theme } from '@theme/restyle';

import { TabBarState } from '../Tabs.decl';

import { TabBarItem } from './TabBarItem';

export function TabBar(tabBarProps: SceneRendererProps & { navigationState: TabBarState }) {
    const {
        activeOpacity,
        colors: { primary, transparent },
    } = useTheme<Theme>();
    const { navigationState, jumpTo, layout, position } = tabBarProps;
    const { index, routes } = navigationState;
    const activeKey = routes?.[index]?.key;
    const tabItemRenderer = useMemo(
        () => TabBarItem({ activeKey, layout, jumpTo, activeOpacity }),
        [activeKey, activeOpacity, jumpTo, layout]
    );

    return (
        <RNTVTabBar
            navigationState={navigationState}
            jumpTo={jumpTo}
            layout={layout}
            position={position}
            renderTabBarItem={tabItemRenderer}
            style={[{ backgroundColor: transparent }]}
            tabStyle={{ backgroundColor: primary }}
            indicatorStyle={{ height: 0 }}
        />
    );
}
