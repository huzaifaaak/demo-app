import React, { useCallback } from 'react';

import { useNavigation } from '@react-navigation/core';

import { Trans } from 'react-i18next';

import { IAuth, IUser, IVendor } from '@bridghq/types';
import useAsyncEffect from 'use-async-effect';

import { useGet, usePost } from '@fetch';
import { useMetaInfo } from '@meta';

import { Container } from '@components/Container';
import { Divider } from '@components/Divider';
import { Form } from '@components/Form';
import { TextInput } from '@components/Form/TextInput';
import { Header } from '@components/Header';
import { Spacer } from '@components/Spacer';
import { TextView } from '@components/TextView';

import { Routes } from '@constants/routes';

import { useLocale } from '@utils/useLocale';
import { useSerializedStorage, useStorage } from '@utils/useStorage';

import { useTranslation } from '@hooks/useTranslation';

export function SignUp() {
    const { reset, navigate } = useNavigation();

    const {
        loading: registerLoading,
        issues: registerIssues,
        error: registerError,
        data: registerData,
        POST: register,
    } = usePost<IAuth.RegisterReturn, IAuth.RegisterArgs>();
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
    const { setStorageValue: setToken } = useSerializedStorage<IAuth.RegisterReturn>('token');
    const { setStorageValue: setVendorId } = useStorage('vendorId');
    const { setUser, setVendor } = useMetaInfo();
    const { deviceCountry: businessCountry, deviceCurrency: businessCurrency } = useLocale();
    const { tc } = useTranslation();

    const onSubmit = useCallback(
        (formValues) => {
            const body: IAuth.RegisterArgs = {
                ...formValues,
                businessCountry,
                businessCurrency,
            };

            register('/auth/register', {
                body,
            });
        },
        [register, businessCurrency, businessCountry]
    );

    useAsyncEffect(() => {
        if (registerData) {
            setToken(registerData);
            getUser('/users/get', {
                headers: {
                    Authorization: `Bearer ${registerData.accessToken}`,
                },
            });
        }
    }, [registerData]);

    useAsyncEffect(() => {
        if (userData && registerData) {
            const vendorId = userData.vendorPrimary[0].id;
            setUser(userData);
            setVendorId(vendorId);
            getVendor('/vendors/get', {
                headers: {
                    Authorization: `Bearer ${registerData.accessToken}`,
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
                        name: Routes.Base.BUSINESS_INFO,
                    },
                ],
            });
        }
    }, [vendorData]);

    const goToLogin = useCallback(() => navigate(Routes.Base.LOGIN), [navigate]);

    const error = registerError || userError || vendorError;
    const loading = registerLoading || userLoading || vendorLoading;

    return (
        <Form.Wrapper<IAuth.RegisterArgs> error={error} onSubmit={onSubmit} issues={registerIssues}>
            <Container keyboardShouldPersistTaps="handled">
                <Spacer>
                    <Header>
                        <Header.Title>{tc('signup.header')}</Header.Title>
                    </Header>
                    <Form.Error />
                    <Spacer horizontal>
                        <TextInput name="firstName" label="First name" />
                        <TextInput name="lastName" label="Last name" />
                    </Spacer>
                    <TextInput label="Business name" name="businessName" />
                    <TextInput name="email" label="Email" keyboardType={'email-address'} />
                    <TextInput name="password" label="Password" secure />

                    <TextView>
                        <Trans i18nKey="signup.terms">
                            By signing up, you agree to our
                            {'\n'}
                            <TextView link>terms & conditions</TextView> and
                            <TextView link>privacy policy</TextView>
                        </Trans>
                    </TextView>

                    <Form.Submit disabled={loading}>
                        {loading ? 'Loading...' : 'Signup'}
                    </Form.Submit>
                    <Divider />

                    <TextView>
                        <Trans i18nKey="signup.footer">
                            Already have an account?{'\n'}
                            <TextView link mt={5} onPress={goToLogin}>
                                Login now
                            </TextView>
                        </Trans>
                    </TextView>
                </Spacer>
            </Container>
        </Form.Wrapper>
    );
}
