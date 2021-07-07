import React, { useMemo, useCallback, useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';

import { ICatalog } from '@bridghq/types';

import { usePost } from '@fetch';

import { Box, ScrollBox } from '@components/Box';
import { Button } from '@components/Button';
import { Form } from '@components/Form';
import { Multiline } from '@components/Form/Multiline';
import { Select } from '@components/Form/Select';
import { TextInput } from '@components/Form/TextInput';
import { Header } from '@components/Header';
import { Spacer } from '@components/Spacer';
import { Text } from '@components/Text';
import { noop } from '@components/utils';

import { Spacing } from '@theme/restyle/constants';

import { useSerializedStorage } from '@utils/useStorage';

import { useCurrency } from '@hooks/useCurrency';
import { useSWR } from '@hooks/useSWR';
import { useTranslation } from '@hooks/useTranslation';

import {
    SelectCategoryLabelRenderer,
    SelectCategoryOptionRenderer,
} from './components/selectCategory/';
import { Category } from './createItem.decl';

export function CreateItem() {
    const { storedValue: catalogId } = useSerializedStorage<ICatalog.GetReturn>('catalog');

    const { data: categoryData, error: categoryError }: { data?: Category[]; error?: any } = useSWR(
        '/categories/list',
        {}
    );

    const { symbol } = useCurrency();

    const { POST, data: postResp, error: itemError, loading: itemLoading } = usePost();
    const { tc } = useTranslation();
    const { goBack } = useNavigation();

    const spacerStyle = useMemo(
        () => ({
            padding: 20,
            position: 'absolute',
            bottom: 0,
            backgroundColor: 'black',
        }),
        []
    );

    const submit = useCallback(
        (data) => {
            const obj = {
                categoryId: data.category,
                name: data.name,
                description: data.description,
                price: data.price && parseInt(data.price),
                discount: 0,
                picture: 'https://placekitten.com/200/300',
            };

            POST(`/catalogs/${catalogId?.id}/items/create`, {
                body: obj,
                headers: {
                    catalogId: catalogId?.id,
                },
            });
        },
        [POST, catalogId?.id]
    );

    useEffect(() => {
        if (postResp?.id) {
            goBack();
        }
    }, [goBack, postResp]);

    const error = itemError || categoryError;

    return (
        <Form.Wrapper
            initialValue={{
                category: 'dbc8abfe-8d32-420f-80e0-8e5274d34507',
            }}
            error={error}
            onSubmit={submit}>
            <Box padding={Spacing.XLARGE}>
                <Header onBack={goBack}>
                    <Header.Title>Create item</Header.Title>
                </Header>
            </Box>
            <ScrollBox style={{ marginBottom: 80 }} padding={Spacing.XLARGE}>
                <Spacer style={{ marginBottom: 80 }} flex={0} itemsFlex={0}>
                    <Form.Error />
                    <TextInput name="name" label="Name" />
                    <Multiline name="description" label="Description" />
                    <Box width="100%" height={1} backgroundColor="blackLight" />

                    <Box>
                        <Text variant="subheading">Category</Text>
                        <Text
                            mt={Spacing.XSMALL}
                            style={{ textAlign: 'left', width: '100%' }}
                            variant="ghost">
                            {tc('product.createItem.category')}
                        </Text>
                    </Box>
                    <Select<Category>
                        options={categoryData || []}
                        name="category"
                        label="Category"
                        labelKey="name"
                        valueKey="id"
                        labelRenderer={SelectCategoryLabelRenderer}
                        optionRenderer={SelectCategoryOptionRenderer}
                        required={false}
                        placeholder=""
                    />
                    <Box>
                        <Text variant="subheading">Cost</Text>
                        <Text mt={Spacing.XSMALL} variant="ghost">
                            {tc('product.createItem.price')}
                        </Text>
                    </Box>
                    <TextInput prefix={symbol} label="" required={false} name="price" />
                </Spacer>
            </ScrollBox>
            <Spacer space={10} style={spacerStyle} flexGrow={1} horizontal>
                <Button variant="ghost">Cancel</Button>
                <Form.Submit disabled={itemLoading}>Create</Form.Submit>
            </Spacer>
        </Form.Wrapper>
    );
}
