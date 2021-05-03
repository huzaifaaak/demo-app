import React from 'react';

import { StatusBar, Text, View } from 'react-native';

import { NavigationContainer, DarkTheme } from '@react-navigation/native';

import { useTranslation } from 'react-i18next';

import { ThemeProvider } from 'styled-components';

import './overrides/Text.override';

import { BottomSheetProvider } from '@components/BottomSheet';

import { FetchProvider } from './fetch';
import { BaseRoutes } from './routes/app.routes';
import { Theme } from './theme';

export function Root() {
    const { ready } = useTranslation();

    if (!ready) {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'black',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Text>Loading..</Text>
            </View>
        );
    }

    return (
        <FetchProvider baseUrl="https://api-staging.bridg.dev">
            <NavigationContainer theme={DarkTheme}>
                <StatusBar backgroundColor={DarkTheme.colors.background} />
                <ThemeProvider theme={Theme}>
                    <BottomSheetProvider>
                        <BaseRoutes />
                    </BottomSheetProvider>
                </ThemeProvider>
            </NavigationContainer>
        </FetchProvider>
    );
}
