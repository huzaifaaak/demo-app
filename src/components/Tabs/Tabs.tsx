import React, { Children, useCallback, useRef, useState, useEffect } from 'react';

import { useWindowDimensions } from 'react-native';
import { TabView } from 'react-native-tab-view';

import { TabBar } from './TabBar';
import { TabsProps, IScene, IRoute } from './Tabs.decl';

export function Tabs({ children, style }: TabsProps) {
    const [index, setIndex] = useState(0);
    const [scenes, setScenes] = useState<IScene>({});
    const routes = useRef<IRoute[]>([]);
    const hasSetScene = useRef(false);

    const width = useWindowDimensions().width;
    const RenderScene = useCallback(
        ({ route }) => {
            const Comp = scenes[route.key] as React.ComponentType;
            return <Comp />;
        },
        [scenes]
    );

    useEffect(() => {
        if (!hasSetScene.current) {
            hasSetScene.current = true;
            const scenes: IScene = {};
            const count = Children.count(children);
            Children.forEach(children, ({ props: { tabKey, title, scene } }, childIndex) => {
                routes.current.push({
                    key: tabKey,
                    title,
                    index: childIndex,
                    last: childIndex === count - 1,
                    length: count,
                });
                scenes[tabKey] = scene;
            });
            setScenes(scenes);
        }
    }, [children]);

    return (
        <>
            <TabView
                navigationState={{ index, routes: routes.current }}
                onIndexChange={setIndex}
                renderScene={RenderScene}
                renderTabBar={TabBar}
                initialLayout={{ width }}
                style={style}
            />
        </>
    );
}
