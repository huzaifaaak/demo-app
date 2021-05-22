export type UseFetchOptions<TBody = Record<string, any>> = Omit<RequestInit, 'method' | 'body'> & {
    body?: TBody;
};

export const FetchMethods = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
} as const;

export type UseFetchCaller<TData = any, TBody = Record<string, any>> = (
    url: string,
    options?: UseFetchOptions<TBody>
) => Promise<TData>;

export interface UseFetchIssue {
    field: string;
    code: string;
    meta: any;
}

export interface UseFetchError {
    error: string;
    issues?: UseFetchIssue[];
    message?: string;
    status: number;
    ok: boolean;
    statusCode: number;
}

export type UseFetchReturnType<TData, TBody, K = keyof typeof FetchMethods> = {
    loading: boolean;
    data: TData | null;
    error: UseFetchError | null;
    issues: UseFetchIssue[];
} & (K extends 'GET'
    ? {
          GET: UseFetchCaller<TData, never>;
      }
    : K extends 'POST'
    ? {
          POST: UseFetchCaller<TData, TBody>;
      }
    : K extends 'PUT'
    ? {
          PUT: UseFetchCaller<TData, TBody>;
      }
    : K extends 'PATCH'
    ? {
          PATCH: UseFetchCaller<TData, TBody>;
      }
    : K extends 'DELETE'
    ? {
          DELETE: UseFetchCaller<TData, never>;
      }
    : Record<string, any>);
