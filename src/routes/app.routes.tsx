import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from '../constants/routes';

import Login from '../screens/login';

const Stack = createStackNavigator();

const BaseRoutes = () => (
    <Stack.Navigator>
        <Stack.Screen name={Routes.Base.LOGIN} component={Login} />
    </Stack.Navigator>
);

export default BaseRoutes;
