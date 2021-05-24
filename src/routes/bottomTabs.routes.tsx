import React from 'react';

import Icon from 'react-native-remix-icon';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Theme } from '@theme';

import { Routes } from '@constants/routes';

import { Checkout } from '@screens/Checkout/';
import { Product } from '@screens/Product/';

const Tab = createBottomTabNavigator();

export function BottomTabs() {
    const { CHECKOUT, PRODUCTS, SETTINGS, TRANSACTIONS } = Routes.App;
    const { blackDarker, greyDark, primary } = Theme.colors;

    const iconRenderer = (unFilled: string, filled: string) => ({
        focused,
        size,
        color,
    }: {
        focused: boolean;
        size: number;
        color: string;
    }) => <Icon name={focused ? filled : unFilled} size={size} color={color} />;

    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    backgroundColor: blackDarker,
                },
                inactiveTintColor: greyDark,
                activeTintColor: primary,
            }}>
            <Tab.Screen
                name={CHECKOUT}
                component={Checkout}
                options={{
                    tabBarIcon: iconRenderer('shopping-cart-line', 'shopping-cart-fill'),
                }}
            />
            <Tab.Screen
                name={PRODUCTS}
                component={Product}
                options={{
                    tabBarIcon: iconRenderer('store-2-line', 'store-2-fill'),
                }}
            />
            <Tab.Screen
                name={TRANSACTIONS}
                component={Checkout}
                options={{
                    tabBarIcon: iconRenderer('funds-line', 'funds-fill'),
                }}
            />
            <Tab.Screen
                name={SETTINGS}
                component={Checkout}
                options={{
                    tabBarIcon: iconRenderer('user-3-line', 'user-3-fill'),
                }}
            />
        </Tab.Navigator>
    );
}
