import React, { useCallback, useContext } from 'react';

import { useWindowDimensions } from 'react-native';
import { SceneRendererProps, TabBar, TabView } from 'react-native-tab-view';

import { useTheme } from '@shopify/restyle';

import { TouchableBox } from '@components/Box';
import { Text } from '@components/Text';

import { Theme } from '@theme/restyle';

import { TabsProps, TabBarState } from './Tabs.decl';
import { TabContext } from './context/TabContext';

export function Tabs({ children }: TabsProps) {
    const { index, routes, scenes, setIndex } = useContext(TabContext);
    const {
        activeOpacity,
        colors: { primary, transparent },
    } = useTheme<Theme>();

    const width = useWindowDimensions().width;
    const RenderScene = useCallback(
        ({ route }) => {
            const Comp = scenes[route.key];
            return <Comp />;
        },
        [scenes]
    );

    const RenderTabBar = useCallback(
        (tabBarProps: SceneRendererProps & { navigationState: TabBarState }) => {
            const { navigationState, jumpTo, layout } = tabBarProps;
            const { index, routes } = navigationState;
            const activeKey = routes?.[index]?.key;

            return (
                <TabBar
                    {...tabBarProps}
                    renderTabBarItem={({ key, route }) => {
                        const isTabActive = key === activeKey;
                        return (
                            <TouchableBox
                                height={40}
                                width={layout?.width / routes?.length}
                                backgroundColor={isTabActive ? 'primary' : 'transparent'}
                                activeOpacity={activeOpacity}
                                alignItems="center"
                                justifyContent="center"
                                key={key}
                                onPress={() => jumpTo(key)}>
                                <Text color={isTabActive ? 'white' : 'grey'}>{route?.title}</Text>
                            </TouchableBox>
                        );
                    }}
                    style={{ backgroundColor: transparent }}
                    tabStyle={{ backgroundColor: primary }}
                    indicatorStyle={{ height: 0 }}
                />
            );
        },
        [activeOpacity, primary, transparent]
    );

    return (
        <>
            <TabView
                navigationState={{ index, routes: routes.current }}
                onIndexChange={setIndex}
                renderScene={RenderScene}
                initialLayout={{ width }}
                renderTabBar={RenderTabBar}
            />
            {children}
        </>
    );
}
