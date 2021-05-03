import React from 'react';

import { StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/core';

import { Launch } from '@assets/images/launch';
import { Logo } from '@assets/images/logo';

import { Button } from '@components/Button';

import { Routes } from '@constants/routes';

import { useTranslation } from '@hooks/useTranslation';

import { Container, Wrapper, Description, AccountExist, LoginText } from './Welcome.styled';

export function Welcome() {
    const { navigate } = useNavigation();
    const { tc } = useTranslation();

    return (
        <Container>
            <StatusBar hidden />
            <Launch />
            <Wrapper>
                <Logo />
                <Description>{tc('welcome.description')}</Description>
                <Button onPress={() => navigate(Routes.Base.REGISTER)}>
                    {tc('welcome.cta.create')}
                </Button>
                <AccountExist>{tc('welcome.accountExists')}</AccountExist>
                <LoginText>{tc('welcome.cta.login')}</LoginText>
            </Wrapper>
        </Container>
    );
}
