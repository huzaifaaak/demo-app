import { useCallback, useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { ICatalog } from '@bridghq/types';

import { Item } from '@bridghq/types/lib/types/prisma-client';
import { usePatch, usePost } from '@fetch';

import { Routes } from '@constants/routes';

import { useSerializedStorage } from '@utils/useStorage';

import { useSWR } from '@hooks/useSWR';

export const useItem = (type: string, editValues: any, navigation: any) => {
    const { storedValue: catalogId } = useSerializedStorage<ICatalog.GetReturn>('catalog');
    const [initalValue, setInitialValue] = useState<any>({
        category: 'dbc8abfe-8d32-420f-80e0-8e5274d34507',
    });
    const [loading, setLoading] = useState(true);

    const { POST, data: postResp, error: itemError, loading: itemLoading } = usePost();
    const { PATCH, data: patchResp, error: editError, loading: editLoading } = usePatch();

    const { mutate } = useSWR('/items/list', {});
    const { mutate: mutateEditItem } = useSWR(`/items/${editValues?.id}`, {});

    const { goBack, navigate } = useNavigation();

    useEffect(() => {
        if (type === 'edit') {
            setInitialValue({
                category: editValues?.categoryId,
                name: editValues?.name,
                description: editValues?.description,
                price: editValues?.price?.toString?.(),
            });
        }
        setTimeout(() => setLoading(false), 500);
    }, [editValues, type]);

    const submit = useCallback(
        (data: any) => {
            if (type === 'create') {
                const obj = {
                    categoryId: data.category,
                    name: data.name,
                    description: data.description,
                    price: data.price && parseInt(data.price),
                };

                POST(`/catalogs/${catalogId?.id}/items/create`, {
                    body: obj,
                    headers: {
                        catalogId: catalogId?.id,
                    },
                });
            } else {
                const obj = {
                    name: data.name,
                    description: data.description,
                    price: data.price && parseInt(data.price),
                };
                PATCH(`/catalogs/${catalogId?.id}/items/${editValues?.id}`, {
                    body: obj,
                    headers: {
                        catalogId: catalogId?.id,
                    },
                });
            }
        },
        [PATCH, POST, catalogId?.id, editValues, type]
    );

    useEffect(() => {
        if (postResp?.id) {
            if (type === 'create') {
                goBack();
                navigate(Routes.App.VIEWITEM, { id: postResp?.id });
                // mutate();
                mutate((data: Item[]) => {
                    return [...data, postResp];
                }, false);
            }
        }
    }, [postResp, type, goBack, navigate, itemError, mutate]);

    useEffect(() => {
        if (patchResp?.id) {
            mutateEditItem(patchResp, false);
            mutate();
            goBack();
        }
    }, [goBack, mutate, mutateEditItem, patchResp]);

    const isLoading = itemLoading || editLoading;
    const error = itemError || editError;

    return {
        loading,
        initalValue,
        submit,
        isLoading,
        error,
    };
};
