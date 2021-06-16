import { ReactNode } from 'react';

import { ScrollView, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { createBox } from '@shopify/restyle';

import { Theme } from '@theme/restyle';

export const Box = createBox<Theme>();
export const ScrollBox = createBox<Theme>(ScrollView);
export const FlatListBox = createBox<Theme>(FlatList);
export const TouchableBox = createBox<Theme, TouchableOpacityProps & { children: ReactNode }>(
    TouchableOpacity
);
