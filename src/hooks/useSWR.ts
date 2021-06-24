import { useCallback, useEffect, useState } from 'react';

import { IAuth, ICatalog } from '@bridghq/types';
import useInternalSWR, { SWRConfiguration } from 'swr';

import { BASE_URL } from '@config/apiConfig';

import { useSerializedStorage, useStorage } from '@utils/useStorage';

export function useSWR(key: string, options: SWRConfiguration) {
    const [shouldFetch, setShouldFetch] = useState(false);
    const { storedValue: token } = useSerializedStorage<IAuth.LoginReturn>('token');
    const { storedValue: catalog } = useSerializedStorage<ICatalog.GetReturn>('catalog');
    const { storedValue: vendorId } = useStorage('vendorId');

    useEffect(() => {
        if (token && vendorId && catalog) {
            setShouldFetch(true);
        }
    }, [token, vendorId, catalog]);

    const fetcher = useCallback(
        (url) =>
            fetch(url, {
                headers: {
                    Authorization: `Bearer ${token?.accessToken}`,
                    'Vendor-Id': vendorId,
                    'Content-Type': 'application/json; charset=UTF-8',
                },
            })
                .then(async (res) => {
                    if (res.status >= 400 && res.status <= 499) {
                        const error = await res.json();
                        //https://github.com/vercel/swr/issues/282
                        throw error;
                    } else {
                        return res.json();
                    }
                })
                .catch((error) => {
                    throw error;
                }),
        [token?.accessToken, vendorId]
    );

    return useInternalSWR(
        shouldFetch ? BASE_URL + `/catalogs/${catalog?.id}${key}` : null,
        fetcher,
        options
    );
}
