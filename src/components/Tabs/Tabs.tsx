import React, { useCallback, useContext } from 'react';

import { useWindowDimensions } from 'react-native';
import { SceneRendererProps, TabBar, TabView } from 'react-native-tab-view';

import { useTheme } from 'styled-components';

import { TabsProps, TabBarState } from './Tabs.decl';
import { TabBarItem, TabLabel } from './Tabs.styled';
import { TabContext } from './context/TabContext';

export function Tabs({ children }: TabsProps) {
    const { index, routes, scenes, setIndex } = useContext(TabContext);
    const {
        components: {
            Pressable: { activeOpacity },
        },
        colors: { primary, transparent },
    } = useTheme();
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
                            <TabBarItem
                                activeOpacity={activeOpacity}
                                key={key}
                                onPress={() => jumpTo(key)}
                                isTabActive={isTabActive}
                                routesLength={routes?.length}
                                width={layout?.width}>
                                <TabLabel isTabActive={isTabActive}>{route?.title}</TabLabel>
                            </TabBarItem>
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
