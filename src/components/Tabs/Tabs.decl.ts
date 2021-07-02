import { Dispatch, MutableRefObject, ReactElement, ReactNode, SetStateAction } from 'react';

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

export type IScene = Record<string, ReactNode>;

export interface IRoute {
    key: string;
    title: string;
    index: number;
    last: boolean;
    length: number;
}

export interface ITabContext {
    index: number;
    setIndex: Dispatch<SetStateAction<number>>;
    routes: MutableRefObject<any>;
    scenes: Record<string, unknown> | any;
    setScenes: Dispatch<SetStateAction<Record<string, unknown> | IScene>>;
}

export interface TabsProps {
    children: ReactElement<TabProps>[];
    style?: ViewStyle;
}

export type TabBarState = NavigationState<IRoute>;
