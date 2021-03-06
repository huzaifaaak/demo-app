import React from 'react';

import { StatusBar } from 'react-native';

import { NavigationContainer, DarkTheme } from '@react-navigation/native';

import { useTranslation } from 'react-i18next';

import { PortalProvider } from '@gorhom/portal';
import { ThemeProvider as RestyleProvider } from '@shopify/restyle';
import { ThemeProvider } from 'styled-components/native';

import './overrides/Text.override';

import { BottomSheetProvider } from '@components/BottomSheet';

import { theme as restyleTheme } from '@theme/restyle';

import { FetchProvider } from './fetch';
import { MetaProvider } from './meta/MetaProvider';
import { BaseRoutes } from './routes/app.routes';
import { Theme as scTheme } from './theme';

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
                    <RestyleProvider theme={restyleTheme}>
                        <ThemeProvider theme={scTheme}>
                            <BottomSheetProvider>
                                <PortalProvider>
                                    <BaseRoutes />
                                </PortalProvider>
                            </BottomSheetProvider>
                        </ThemeProvider>
                    </RestyleProvider>
                </MetaProvider>
            </NavigationContainer>
        </FetchProvider>
    );
}
