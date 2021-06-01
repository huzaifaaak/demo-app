import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Theme } from '@theme';

import IconFundsFill from '@icons/FundsFill';
import IconFundsLine from '@icons/FundsLine';
import IconShoppingCartFill from '@icons/ShoppingCartFill';
import IconShoppingCartLine from '@icons/ShoppingCartLine';
import IconStore2Fill from '@icons/Store2Fill';
import IconStore2Line from '@icons/Store2Line';
import IconUser3Fill from '@icons/User3Fill';
import IconUser3Line from '@icons/User3Line';

import { Icon, IconProps } from '@components/Icon';

import { Routes } from '@constants/routes';

import { Checkout } from '@screens/Checkout/';
import { Product } from '@screens/Product/';

const Tab = createBottomTabNavigator();

const iconRenderer = (Filled: IconProps['icon'], Unfilled: IconProps['icon']) => ({
    focused,
    color,
}: {
    focused: boolean;
    color: string;
}) => <Icon icon={focused ? Filled : Unfilled} fill={color} />;

export function BottomTabs() {
    const { CHECKOUT, PRODUCTS, SETTINGS, TRANSACTIONS } = Routes.App;
    const { blackDarker, greyDark, primary } = Theme.colors;

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
                    tabBarIcon: iconRenderer(IconShoppingCartFill, IconShoppingCartLine),
                }}
            />
            <Tab.Screen
                name={PRODUCTS}
                component={Product}
                options={{
                    tabBarIcon: iconRenderer(IconStore2Fill, IconStore2Line),
                }}
            />
            <Tab.Screen
                name={TRANSACTIONS}
                component={Checkout}
                options={{
                    tabBarIcon: iconRenderer(IconFundsFill, IconFundsLine),
                }}
            />
            <Tab.Screen
                name={SETTINGS}
                component={Checkout}
                options={{
                    tabBarIcon: iconRenderer(IconUser3Fill, IconUser3Line),
                }}
            />
        </Tab.Navigator>
    );
}
