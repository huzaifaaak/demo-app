import { ReactNode } from 'react';

import {
    ScrollView,
    TouchableOpacity,
    TouchableOpacityProps,
    FlatList,
    FlatListProps,
} from 'react-native';

import { createBox } from '@shopify/restyle';

import { Theme } from '@theme/restyle';

export const Box = createBox<Theme>();
export const ScrollBox = createBox<Theme>(ScrollView);
export const FlatListBox = createBox<Theme, FlatListProps<any>>(FlatList);
export const TouchableBox = createBox<Theme, TouchableOpacityProps & { children: ReactNode }>(
    TouchableOpacity
);
