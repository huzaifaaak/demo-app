import React from 'react';

import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import { Routes } from '@constants/routes';

import { BusinessInfo } from '@screens/BusinessInfo';
import { Login } from '@screens/Login';
import { SignUp } from '@screens/Signup';

import { Welcome } from '../screens/Welcome';

const Stack = createStackNavigator();

export function BaseRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
            initialRouteName={Routes.Base.WELCOME}>
            <Stack.Screen name={Routes.Base.WELCOME} component={Welcome} />
            <Stack.Screen name={Routes.Base.LOGIN} component={Login} />
            <Stack.Screen name={Routes.Base.REGISTER} component={SignUp} />
            <Stack.Screen name={Routes.Base.BUSINESS_INFO} component={BusinessInfo} />
        </Stack.Navigator>
    );
}
