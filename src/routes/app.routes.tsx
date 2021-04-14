import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from '../constants/routes';

import { Login } from '../screens/Login';
import { Welcome } from '../screens/Welcome'

const Stack = createStackNavigator();

export function BaseRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name={Routes.Base.WELCOME} component={Welcome} />
            <Stack.Screen name={Routes.Base.LOGIN} component={Login} />
        </Stack.Navigator>
    );
}