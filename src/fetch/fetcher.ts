export function fetcher<T, K, M, J, L, N, O>({
    setData,
    setLoading,
    setError,
    setAuthHeader,
    setFullUrl,
    parseJSON,
    setIssues,
}: {
    setData: T;
    setLoading: K;
    setError: M;
    setAuthHeader: J;
    setFullUrl: L;
    parseJSON: N;
    setIssues: O;
}) {
    return function fetcherInstance(
        url: string,
        method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
        options: any
    ) {
        const _setLoading = setLoading as any;
        const _setIssues = setIssues as any;
        const _setError = setError as any;

        _setLoading(true);
        _setError(null);
        _setIssues([]);

        return fetch(
            (setFullUrl as any)(url),
            (setAuthHeader as any)({
                ...options,
                body: JSON.stringify(options.body),
                method,
            })
        )
            .then((response) => (parseJSON as any)(response))
            .then((data) => {
                if (data.ok) {
                    (setData as any)(data);
                    return data;
                } else throw data;
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
