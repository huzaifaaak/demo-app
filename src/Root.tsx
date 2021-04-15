import React from 'react';
import { Theme } from './theme/';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { BaseRoutes } from './routes/app.routes';

export function Root() {
    return (
        <NavigationContainer theme={DarkTheme}>
            <ThemeProvider theme={Theme}>
                <BaseRoutes />
            </ThemeProvider>
        </NavigationContainer>
    )
}