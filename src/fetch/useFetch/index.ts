import { useCallback, useContext, useMemo, useState } from 'react';

import { IAuth } from '@bridghq/types';

import { useSerializedStorage, useStorage } from '@utils/useStorage';

import { FetchContext } from '../Fetch.context';
import { fetcher } from '../fetcher';

import {
    FetchMethods,
    UseFetchCaller,
    UseFetchIssue,
    UseFetchReturnType,
    UseFetchError,
} from './useFetch.decl';

function useFetch<TData = any, TBody = any>(method: keyof typeof FetchMethods) {
    const { baseUrl } = useContext(FetchContext);
    const { storedValue: token } = useSerializedStorage<IAuth.RegisterReturn>('token');
    const { storedValue: vendorId } = useStorage('vendorId');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<UseFetchError | null>(null);
    const [data, setData] = useState<TData | null>(null);
    const [issues, setIssues] = useState<UseFetchIssue[]>([]);

    const setFullUrl = useCallback(
        (url) => [baseUrl.replace(/\/+$/g, ''), url.replace(/^\/+/g, '')].join('/'),
        [baseUrl]
    );

    const setAuthHeader = useCallback(
        (options: RequestInit) => {
            return {
                ...options,
                headers: {
                    Authorization: token ? `Bearer ${token.accessToken}` : '',
                    'Vendor-Id': vendorId,
                    'Content-Type': 'application/json; charset=UTF-8',
                    ...options.headers,
                },
            };
        },
        [token, vendorId]
    );

    const fetcherInstance = useMemo(
        () =>
            fetcher<
                TData,
                typeof setData,
                typeof setLoading,
                typeof setError,
                typeof setIssues,
                typeof setAuthHeader,
                typeof setFullUrl
            >({
                setData,
                setLoading,
                setError,
                setIssues,
                setAuthHeader,
                setFullUrl,
            }),
        [setData, setLoading, setError, setAuthHeader, setFullUrl, setIssues]
    );

    const _fetcher = useCallback(
        (url, options) => {
            return fetcherInstance(url, method, options);
        },
        [method, fetcherInstance]
    ) as UseFetchCaller<TData, TBody>;

    return {
        loading,
        data,
        error,
        issues,
        [method]: _fetcher,
    };
}

export const useGet = <TData = any, TBody = Record<string, any>>() =>
    useFetch(FetchMethods.GET) as UseFetchReturnType<TData, TBody, 'GET'>;

export const usePost = <TData = any, TBody = Record<string, any>>() =>
    useFetch(FetchMethods.POST) as UseFetchReturnType<TData, TBody, 'POST'>;

export const usePut = <TData = any, TBody = Record<string, any>>() =>
    useFetch(FetchMethods.PUT) as UseFetchReturnType<TData, TBody, 'PUT'>;

export const usePatch = <TData = any, TBody = Record<string, any>>() =>
    useFetch(FetchMethods.PATCH) as UseFetchReturnType<TData, TBody, 'PATCH'>;

export const useDelete = <TData = any, TBody = Record<string, any>>() =>
    useFetch(FetchMethods.DELETE) as UseFetchReturnType<TData, TBody, 'DELETE'>;
