import { useCallback, useContext, useMemo, useState } from 'react';

import { useStorage } from '@utils/useStorage';

import { FetchContext } from '../Fetch.context';
import { fetcher } from '../fetcher';

import { FetchMethods, UseFetchCaller, UseFetchIssue, UseFetchReturnType } from './useFetch.decl';

function useFetch<TData = any, TBody = any, TError = any>(method: keyof typeof FetchMethods) {
    const { baseUrl } = useContext(FetchContext);
    const { storedValue: token } = useStorage('token');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<TError | null>(null);
    const [data, setData] = useState<TData | null>(null);
    const [issues, setIssues] = useState<UseFetchIssue[]>([]);

    const setFullUrl = useCallback(
        (url) => [baseUrl.replace(/\/+$/g, ''), url.replace(/^\/+/g, '')].join('/'),
        [baseUrl]
    );

    const setAuthHeader = useCallback(
        (options: RequestInit) => ({
            ...options,
            headers: {
                ...options.headers,
                Authorization: token ? `Bearer ${token}` : '',
                'Content-type': 'application/json; charset=UTF-8',
            },
        }),
        [token]
    );

    const parseJSON = useCallback((response) => {
        return new Promise((resolve) =>
            response.json().then((json: any) =>
                resolve({
                    status: response.status,
                    ok: response.ok,
                    ...json,
                })
            )
        );
    }, []);

    const fetcherInstance = useMemo(
        () =>
            fetcher({
                setData,
                setLoading,
                setError,
                setIssues,
                setAuthHeader,
                setFullUrl,
                parseJSON,
            }),
        [setData, setLoading, setError, setAuthHeader, setFullUrl, setIssues, parseJSON]
    );

    const _fetcher = useCallback<UseFetchCaller<TBody>>(
        (url, options) => {
            return fetcherInstance(url, method, options);
        },
        [method, fetcherInstance]
    );

    return {
        loading,
        data,
        error,
        issues,
        [method]: _fetcher,
    };
}

export const useGet = <TData = any, TBody = Record<string, any>, TError = any>() =>
    useFetch(FetchMethods.GET) as UseFetchReturnType<TData, TBody, TError, 'GET'>;

export const usePost = <TData = any, TBody = Record<string, any>, TError = any>() =>
    useFetch(FetchMethods.POST) as UseFetchReturnType<TData, TBody, TError, 'POST'>;

export const usePut = <TData = any, TBody = Record<string, any>, TError = any>() =>
    useFetch(FetchMethods.PUT) as UseFetchReturnType<TData, TBody, TError, 'PUT'>;

export const usePatch = <TData = any, TBody = Record<string, any>, TError = any>() =>
    useFetch(FetchMethods.PATCH) as UseFetchReturnType<TData, TBody, TError, 'PATCH'>;

export const useDelete = <TData = any, TBody = Record<string, any>, TError = any>() =>
    useFetch(FetchMethods.DELETE) as UseFetchReturnType<TData, TBody, TError, 'DELETE'>;
