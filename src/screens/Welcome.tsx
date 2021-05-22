import React from 'react';

import { StatusBar, View } from 'react-native';

import { useNavigation } from '@react-navigation/core';

import { Launch } from '@assets/images/launch';
import { Logo } from '@assets/images/logo';

import { Button } from '@components/Button';
import { Container } from '@components/Container';
import { Spacer } from '@components/Spacer';
import { TextView } from '@components/TextView';

import { Routes } from '@constants/routes';

import { useTranslation } from '@hooks/useTranslation';

export function Welcome() {
    const { navigate } = useNavigation();
    const { tc } = useTranslation();

    const goToLogin = () => navigate(Routes.Base.LOGIN);

    return (
        <Container>
            <StatusBar hidden />
            <Launch />
            <Spacer>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Logo />
                </View>
                <TextView>{tc('welcome.description')}</TextView>
                <Button onPress={() => navigate(Routes.Base.REGISTER)}>
                    {tc('welcome.cta.create')}
                </Button>
                <TextView>{tc('welcome.accountExists')}</TextView>
                <TextView link onPress={goToLogin}>
                    {tc('welcome.cta.login')}
                </TextView>
            </Spacer>
        </Container>
    );
}
