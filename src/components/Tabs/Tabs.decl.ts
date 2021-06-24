import { Dispatch, MutableRefObject, ReactNode, SetStateAction } from 'react';

import { ViewStyle } from 'react-native';
import { NavigationState } from 'react-native-tab-view';

export interface TabProps {
    tabKey: string;
    title: string;
    scene: ReactNode;
}

export interface Tab {
    (props: TabProps): null;
}

export interface IScene {
    [key: string]: ReactNode;
}

export interface IRoute {
    key: string;
    title: string;
}

export interface ITabContext {
    index: number;
    setIndex: Dispatch<SetStateAction<number>>;
    routes: MutableRefObject<any>;
    scenes: Record<string, unknown> | any;
    setScenes: Dispatch<SetStateAction<Record<string, unknown> | IScene>>;
}

export interface TabsProps {
    children: ReactNode;
    style?: ViewStyle;
}

export type TabBarState = NavigationState<IRoute>;
