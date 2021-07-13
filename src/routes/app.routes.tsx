import React from 'react';

import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import { Routes } from '@constants/routes';

import { BusinessInfo } from '@screens/BusinessInfo';
import { Checkout } from '@screens/Checkout';
import { ForgotPassword } from '@screens/Forgot';
import { CreateItem } from '@screens/Items/CreateItem';
import { ViewItem } from '@screens/Items/ViewItem';
import { Login } from '@screens/Login';
import { SignUp } from '@screens/Signup';
import { Welcome } from '@screens/Welcome';

import { BottomTabs } from './bottomTabs.routes';

const Stack = createStackNavigator();

export function BaseRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
            initialRouteName={Routes.Base.LOGIN}>
            <Stack.Screen name={Routes.Base.WELCOME} component={Welcome} />
            <Stack.Screen name={Routes.Base.LOGIN} component={Login} />
            <Stack.Screen name={Routes.Base.FORGOT} component={ForgotPassword} />
            <Stack.Screen name={Routes.Base.REGISTER} component={SignUp} />
            <Stack.Screen name={Routes.Base.BUSINESS_INFO} component={BusinessInfo} />
            <Stack.Screen name={Routes.BottomTabBar} component={BottomTabs} />
            <Stack.Screen name={Routes.App.CHECKOUT} component={Checkout} />
            <Stack.Screen name={Routes.App.VIEWITEM} component={ViewItem} />
            <Stack.Screen
                name={Routes.App.CREATE_ITEM}
                component={CreateItem}
                initialParams={{ type: 'create', defaultValue: {} }}
            />
        </Stack.Navigator>
    );
}
