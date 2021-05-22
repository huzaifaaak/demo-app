import React, { useCallback, useEffect } from 'react';

import { useNavigation } from '@react-navigation/core';

import { IAuth } from '@bridghq/types';

import { usePost } from '@fetch';

import { Container } from '@components/Container';
import { Form } from '@components/Form';
import { TextInput } from '@components/Form/TextInput';
import { Header } from '@components/Header';
import { Spacer } from '@components/Spacer';
import { TextView } from '@components/TextView';

import { Routes } from '@constants/routes';

export function ForgotPassword() {
    const { navigate, goBack } = useNavigation();
    const { data, POST, error, issues, loading } = usePost<
        IAuth.ForgotPasswordReturn & { status: boolean; ok: string }
    >();

    const onSubmit = useCallback(
        async (formData: IAuth.ForgotPasswordArgs) => {
            await POST('/auth/forgot-password', { body: formData });
        },
        [POST]
    );

    useEffect(() => {
        if (!loading && data) {
            navigate(Routes.Base.LOGIN, {
                hasForgottenPassword: true,
            });
        }
    }, [loading, data, navigate]);

    return (
        <Container keyboardShouldPersistTaps="handled">
            <Spacer>
                <Header onBack={goBack} back>
                    Forgot Password
                </Header>
                <TextView textAlign="left">
                    Enter your email address to receive a link. You can click on it to reset your
                    password.
                </TextView>
                <Form.Wrapper error={error} onSubmit={onSubmit} issues={issues}>
                    <Spacer>
                        <TextInput name="email" label="Email" keyboardType={'email-address'} />
                        <Form.Submit disabled={loading}>
                            {loading ? 'Loading ...' : 'Reset password'}
                        </Form.Submit>
                    </Spacer>
                </Form.Wrapper>
            </Spacer>
        </Container>
    );
}

export default ForgotPassword;
