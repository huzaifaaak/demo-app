import React, { useEffect, useState } from 'react';

import { getCountry } from 'react-native-localize';

import { useNavigation } from '@react-navigation/core';

import { IUser } from '@bridghq/types';

import { useGet, usePatch } from '@fetch';

import { Form } from '@components/Form';
import { Select } from '@components/Form/Select';
import { Header } from '@components/Header';
import { Spacer } from '@components/Spacer';

import { BusinessTypes } from '@constants/business';
import { CountriesList } from '@constants/countries';
import { countryToCurrencyMap } from '@constants/countryToCurrencyMap';
import { CurrenciesList } from '@constants/currency';
import { Routes } from '@constants/routes';

import { useLocale } from '@utils/useLocale';

import { BusinessInfoType } from './BusinessInfo.decl';
import { Business, Country, Currency } from './BusinessInfo.interface';
import { ButtonWrapper, Container, SubContainer, Details } from './BusinessInfo.styled';
import {
    SelectCategoryLabelRenderer,
    SelectCategoryOptionRenderer,
} from './components/SelectCategory';
import {
    SelectCountryLabelRenderer,
    SelectCountryOptionRenderer,
} from './components/SelectCountry';
import {
    SelectCurrencyLabelRenderer,
    SelectCurrencyOptionRenderer,
} from './components/SelectCurrency';

const CurrenciesListValues = Object.values(CurrenciesList);

export function BusinessInfo() {
    const [formData, setFormData] = useState<null | BusinessInfoType>(null);
    const { deviceCountry: businessCountry, deviceCurrency: businessCurrency } = useLocale();

    const { reset } = useNavigation();
    const {
        GET,
        data: getVendor,
        error: getvendorError,
        issues: getVendorIssues,
        loading: vendorDataLoading,
    } = useGet<IUser.GetReturn>();
    const {
        PATCH,
        data: updateVendor,
        error: updateVendorErrors,
        issues: updateVendorIssues,
        loading: vendorUpdateLoading,
    } = usePatch<BusinessInfoType>();

    useEffect(() => {
        if (formData) {
            GET('users/get', {});
        }
    }, [formData, GET]);

    useEffect(() => {
        const vendorId = getVendor?.vendorPrimary?.[0]?.id;
        if (vendorId) {
            const _businessCountry = formData?.businessCountry
                ? formData?.businessCountry
                : businessCountry;
            const _businessCurrency = formData?.businessCurrency
                ? formData?.businessCurrency
                : businessCurrency;
            const _businessCategory = formData?.businessCategory
                ? formData?.businessCategory
                : 'none';
            const body = {
                country: _businessCountry,
                currency: _businessCurrency,
                category: _businessCategory,
            };
            const headers = { 'Vendor-Id': vendorId };
            PATCH('/vendors/update', { body, headers });
        }
    }, [getVendor, PATCH, formData, businessCurrency, businessCountry]);

    useEffect(() => {
        if (updateVendor)
            reset({
                routes: [
                    {
                        name: Routes.Base.WELCOME,
                    },
                ],
            });
    }, [updateVendor, reset]);

    const onSubmit = () => (_formData: BusinessInfoType) => setFormData(_formData);
    const loading = vendorDataLoading || vendorUpdateLoading;
    return (
        <Container>
            <Form.Wrapper
                // schema={IAuth.RegisterSchema}
                issues={[...getVendorIssues, ...updateVendorIssues]}
                onSubmit={onSubmit()}>
                <SubContainer>
                    <Header>Business Information</Header>
                    <Details>
                        Provide us with some simple information about your business to help us help
                        you. Don’t worry, you can change this information later!
                    </Details>
                    <Spacer>
                        <Select<Country>
                            name="businessCountry"
                            label="Country"
                            options={CountriesList}
                            placeholder="Select a country"
                            labelKey="name"
                            valueKey="iso"
                            labelRenderer={SelectCountryLabelRenderer}
                            optionRenderer={SelectCountryOptionRenderer}
                        />
                        <Select<Currency>
                            name="businessCurrency"
                            label="Currency"
                            options={CurrenciesListValues}
                            placeholder="Select a currency"
                            labelKey="name"
                            valueKey="code"
                            labelRenderer={SelectCurrencyLabelRenderer}
                            optionRenderer={SelectCurrencyOptionRenderer}
                        />
                        <Select<Business>
                            name="businessCategory"
                            label="Business type"
                            options={BusinessTypes as Business[]}
                            placeholder="Select a business"
                            labelKey="type"
                            valueKey="type"
                            labelRenderer={SelectCategoryLabelRenderer}
                            optionRenderer={SelectCategoryOptionRenderer}
                        />
                    </Spacer>
                </SubContainer>
                <SubContainer>
                    <ButtonWrapper>
                        <Form.Submit disabled={loading}>
                            {loading ? 'Loading...' : 'Continue'}
                        </Form.Submit>
                    </ButtonWrapper>
                </SubContainer>
            </Form.Wrapper>
        </Container>
    );
}

export default BusinessInfo;
