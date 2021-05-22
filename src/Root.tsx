import React from 'react';

import { StatusBar } from 'react-native';

import { NavigationContainer, DarkTheme } from '@react-navigation/native';

import { useTranslation } from 'react-i18next';

import { ThemeProvider } from 'styled-components';

import './overrides/Text.override';

import { BottomSheetProvider } from '@components/BottomSheet';

import { FetchProvider } from './fetch';
import { MetaProvider } from './meta/MetaProvider';
import { BaseRoutes } from './routes/app.routes';
import { Theme } from './theme';

export function Root() {
    const { ready } = useTranslation();

    if (!ready) {
        return null;
    }

    return (
        <FetchProvider baseUrl="https://api-staging.bridg.dev">
            <NavigationContainer theme={DarkTheme}>
                <MetaProvider>
                    <StatusBar backgroundColor={DarkTheme.colors.background} />
                    <ThemeProvider theme={Theme}>
                        <BottomSheetProvider>
                            <BaseRoutes />
                        </BottomSheetProvider>
                    </ThemeProvider>
                </MetaProvider>
            </NavigationContainer>
        </FetchProvider>
    );
}
