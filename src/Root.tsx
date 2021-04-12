import React from 'react';
import Theme from './theme/';
import {ThemeProvider} from 'styled-components';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import BaseRoutes from './routes/app.routes';

const Root = () => (
    <NavigationContainer theme={DarkTheme}>
        <ThemeProvider theme={Theme}>
            <BaseRoutes />
        </ThemeProvider>
    </NavigationContainer>
);

export default Root;
