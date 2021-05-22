export function fetcher<TData, A, B, C, D, E, F>({
    setData,
    setLoading,
    setError,
    setIssues,
    setAuthHeader,
    setFullUrl,
}: {
    setData: A;
    setLoading: B;
    setError: C;
    setIssues: D;
    setAuthHeader: E;
    setFullUrl: F;
}) {
    return function fetcherInstance(
        url: string,
        method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
        options: any
    ): Promise<TData> {
        const _setLoading = setLoading as any;
        const _setIssues = setIssues as any;
        const _setError = setError as any;

        _setLoading(true);
        _setError(null);
        _setIssues([]);

        const hasBody = method !== 'GET';

        return fetch(
            (setFullUrl as any)(url),
            (setAuthHeader as any)({
                ...options,
                body: hasBody ? JSON.stringify(options.body) : null,
                method,
            })
        )
            .then((response) => response.json())
            .then((data) => {
                if (!data.statusCode) {
                    (setData as any)(data);
                    return data;
                } else {
                    throw data;
                }
            })
            .catch((error) => {
                _setError(error);

                if (error.issues) {
                    _setIssues(error.issues);
                }

                return error;
            })
            .finally(() => {
                _setLoading(false);
            });
    };
}
