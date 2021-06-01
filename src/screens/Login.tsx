import React, { useCallback } from 'react';

import { View } from 'react-native';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';

import { IAuth, IUser, IVendor } from '@bridghq/types';
import useAsyncEffect from 'use-async-effect';

import { useGet, usePost } from '@fetch';
import { useMetaInfo } from '@meta';

import { Banner } from '@components/Banner';
import { Container } from '@components/Container';
import { Divider } from '@components/Divider';
import { Form } from '@components/Form';
import { TextInput } from '@components/Form/TextInput';
import { Header } from '@components/Header';
import { Spacer } from '@components/Spacer';
import { TextView } from '@components/TextView';

import { Routes } from '@constants/routes';

import { useSerializedStorage, useStorage } from '@utils/useStorage';

import { useTranslation } from '@hooks/useTranslation';

export function Login() {
    const { reset, navigate } = useNavigation();
    const { params } = useRoute<
        RouteProp<{ params: { hasForgottenPassword?: boolean } }, 'params'>
    >();
    const {
        data: loginData,
        error: loginError,
        issues,
        loading: loginLoading,
        POST: login,
    } = usePost<IAuth.LoginReturn, IAuth.LoginArgs>();
    const {
        loading: userLoading,
        error: userError,
        data: userData,
        GET: getUser,
    } = useGet<IUser.GetReturn>();
    const {
        loading: vendorLoading,
        error: vendorError,
        data: vendorData,
        GET: getVendor,
    } = useGet<IVendor.GetReturn>();
    const { setStorageValue: setToken } = useSerializedStorage<IAuth.LoginReturn>('token');
    const { setStorageValue: setVendorId } = useStorage('vendorId');
    const { setUser, setVendor } = useMetaInfo();
    const { tc } = useTranslation();

    const onSubmit = useCallback(
        (formData: IAuth.LoginArgs) => {
            login('/auth/login', {
                body: formData,
            });
        },
        [login]
    );

    useAsyncEffect(() => {
        if (loginData) {
            setToken(loginData);
            getUser('/users/get', {
                headers: {
                    Authorization: `Bearer ${loginData.accessToken}`,
                },
            });
        }
    }, [loginData]);

    useAsyncEffect(() => {
        if (userData && loginData) {
            const vendorId = userData.vendorPrimary[0].id;
            setUser(userData);
            setVendorId(vendorId);
            getVendor('/vendors/get', {
                headers: {
                    Authorization: `Bearer ${loginData.accessToken}`,
                    'Vendor-Id': vendorId,
                },
            });
        }
    }, [userData]);

    useAsyncEffect(() => {
        if (vendorData) {
            setVendor(vendorData);
            reset({
                routes: [
                    {
                        name: Routes.App.CHECKOUT,
                    },
                ],
            });
        }
    }, [vendorData]);

    const goToSignup = () => navigate(Routes.Base.REGISTER);

    const goToForgotPassword = () => navigate(Routes.Base.FORGOT);

    const error = loginError || userError || vendorError;

    const loading = loginLoading || userLoading || vendorLoading;

    return (
        <Form.Wrapper error={error} onSubmit={onSubmit} issues={issues}>
            <Container keyboardShouldPersistTaps="handled">
                <Spacer>
                    <Header>
                        <Header.Title>{tc('login.header')}</Header.Title>
                    </Header>
                    <Form.Error />
                    {params?.hasForgottenPassword && (
                        <Banner type="success" message={tc('login.hasForgottenPassword')} />
                    )}
                    <TextInput
                        name="email"
                        label={tc('login.fields.email')}
                        keyboardType={'email-address'}
                    />
                    <TextInput name="password" label={tc('login.fields.password')} secure />
                    <Form.Submit disabled={loading}>
                        {loading
                            ? tc('login.fields.submit.loading')
                            : tc('login.fields.submit.default')}
                    </Form.Submit>
                    <TextView link onPress={goToForgotPassword}>
                        {tc('login.forgotPassword')}
                    </TextView>
                    <Divider />
                    <View>
                        <TextView>{tc('login.footer.lead')}</TextView>
                        <TextView mt={5} link onPress={goToSignup}>
                            {tc('login.footer.cta')}
                        </TextView>
                    </View>
                </Spacer>
            </Container>
        </Form.Wrapper>
    );
}
