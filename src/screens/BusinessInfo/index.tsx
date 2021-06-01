import React, { useCallback, useEffect, useRef } from 'react';

import { useNavigation } from '@react-navigation/core';

import { IVendor } from '@bridghq/types';

import { usePatch } from '@fetch';
import { useMetaInfo } from '@meta';

import { Container } from '@components/Container';
import { Form } from '@components/Form';
import { Select } from '@components/Form/Select';
import { Header } from '@components/Header';
import { Spacer } from '@components/Spacer';
import { TextView } from '@components/TextView';

import { BusinessTypes } from '@constants/business';
import { CountriesList } from '@constants/countries';
import { CurrenciesList } from '@constants/currency';
import { Routes } from '@constants/routes';

import { useTranslation } from '@hooks/useTranslation';

import { Business, BusinessInfoType, Country, Currency } from './BusinessInfo.decl';
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
    const { vendor, setVendor } = useMetaInfo();
    const { reset } = useNavigation();
    const { PATCH, data, error, issues, loading } = usePatch<
        IVendor.UpdateReturn,
        BusinessInfoType
    >();
    const { tc } = useTranslation();

    const onSubmit = useCallback(
        async (body: BusinessInfoType) => {
            PATCH('/vendors/update', { body });
        },
        [PATCH]
    );

    useEffect(() => {
        if (data) {
            setVendor(data);
            reset({
                routes: [
                    {
                        name: Routes.App.CHECKOUT,
                    },
                ],
            });
        }
    }, [data, setVendor, reset]);

    const formInitialData = useRef<BusinessInfoType>({
        country: vendor?.country,
        currency: vendor?.currency,
        category: vendor?.category || '',
    });

    return (
        <Form.Wrapper
            initialValue={formInitialData.current}
            issues={issues}
            error={error}
            onSubmit={onSubmit}>
            <Container justifyContent="space-between" flexGrow={1}>
                <Spacer>
                    <Header>
                        <Header.Title>{tc('businessInfo.header')}</Header.Title>
                    </Header>
                    <TextView textAlign="left">{tc('businessInfo.info')}</TextView>
                    <Form.Error />
                    <Select<Country>
                        name="country"
                        label={tc('businessInfo.fields.country.label')}
                        options={CountriesList}
                        placeholder={tc('businessInfo.fields.country.placeholder')}
                        labelKey="name"
                        valueKey="iso"
                        labelRenderer={SelectCountryLabelRenderer}
                        optionRenderer={SelectCountryOptionRenderer}
                    />
                    <Select<Currency>
                        name="currency"
                        label={tc('businessInfo.fields.currency.label')}
                        options={CurrenciesListValues}
                        placeholder={tc('businessInfo.fields.currency.placeholder')}
                        labelKey="name"
                        valueKey="code"
                        labelRenderer={SelectCurrencyLabelRenderer}
                        optionRenderer={SelectCurrencyOptionRenderer}
                    />
                    <Select<Business>
                        name="category"
                        label={tc('businessInfo.fields.category.label')}
                        options={BusinessTypes as Business[]}
                        placeholder={tc('businessInfo.fields.category.placeholder')}
                        labelKey="type"
                        valueKey="type"
                        labelRenderer={SelectCategoryLabelRenderer}
                        optionRenderer={SelectCategoryOptionRenderer}
                    />
                </Spacer>
                <Form.Submit disabled={loading}>{loading ? 'Loading...' : 'Continue'}</Form.Submit>
            </Container>
        </Form.Wrapper>
    );
}

export default BusinessInfo;
