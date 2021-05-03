import React, { useEffect, useCallback, useRef, useMemo, useState } from 'react';

import { getCountry } from 'react-native-localize';

import { useNavigation } from '@react-navigation/core';

import { IAuth } from '@bridghq/types';
import { getName } from 'country-list';

import { usePost } from '@fetch';

import { Banner } from '@components/Banner';
import { Button } from '@components/Button';
import { Form } from '@components/Form';
import { TextInput } from '@components/Form/TextInput';
import { Header } from '@components/Header';
import { Spacer } from '@components/Spacer';

import { Routes } from '@constants/routes';

import { useLocale } from '@utils/useLocale';
import { useStorage } from '@utils/useStorage';

import { useTranslation } from '@hooks/useTranslation';

import {
    Container,
    Text,
    DividerView,
    Divider,
    InputWrapper,
    Wrapper,
    InputDivider,
    BannerView,
} from './Signup.styled';

export function SignUp() {
    const { reset } = useNavigation();
    const { tc, te } = useTranslation();
    const { data, loading, issues, POST } = usePost<IAuth.RegisterReturn, IAuth.RegisterArgs>();
    const { setStorageValue } = useStorage('token');
    const { deviceCountry: businessCountry, deviceCurrency: businessCurrency } = useLocale();

    useEffect(() => {
        if (data) {
            const navigate = () => {
                setStorageValue(data.accessToken);
                reset({
                    routes: [
                        {
                            name: Routes.Base.BUSINESS_INFO,
                            params: { businessCategory: '', businessCountry },
                        },
                    ],
                });
            };
            navigate();
        }
    }, [data, setStorageValue, reset, businessCountry]);

    const onSubmit = useCallback(
        (formValues) => {
            const body: IAuth.RegisterArgs = {
                ...formValues,
                businessCountry,
                businessCurrency,
            };

            POST('/auth/register', {
                body,
            });

            // } else if (!response.ok && resp?.issues?.length) {
            // resp.issues.forEach((res: any) => {
            //     setError(res.field, {
            //         type: 'manual',
            //         message: resolve(res.code),
            //     });
            // });
            // }
        },
        [POST, businessCurrency, businessCountry]
    );

    return (
        <Container keyboardShouldPersistTaps="handled">
            <Header>Sign up</Header>
            {/* <BannerView>
                    {!response?.data?.issues && !!response?.data?.message && (
                        <Banner type={'error'} message={resolve(response?.data?.message)} />
                    )}
                </BannerView> */}
            <Form.Wrapper<IAuth.RegisterArgs> onSubmit={onSubmit} issues={issues}>
                <Spacer>
                    <Wrapper>
                        <Spacer space={15} horizontal>
                            <TextInput name="firstName" label="First name" />
                            <TextInput name="lastName" label="Last name" />
                        </Spacer>
                    </Wrapper>
                    <TextInput label="Business name" name="businessName" />
                    <TextInput name="email" label="Email" keyboardType={'email-address'} />
                    <TextInput name="password" label="Password" secure />
                </Spacer>

                <Text mb={20} mt={20}>
                    <Text>By signing up, you agree to our</Text>
                    {'\n'}
                    <Text link>terms & conditions</Text> and <Text link>privacy policy</Text>
                </Text>

                <Form.Submit disabled={loading}>{loading ? 'Loading...' : 'Signup'}</Form.Submit>

                <DividerView>
                    <Divider />
                    <Text mr={10} ml={10} divider>
                        OR
                    </Text>
                    <Divider />
                </DividerView>
                <Text>Already have an account?</Text>
                <Text link mt={5}>
                    Login now
                </Text>
            </Form.Wrapper>
        </Container>
    );
}
