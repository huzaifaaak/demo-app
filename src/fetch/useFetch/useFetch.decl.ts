export type UseFetchOptions<TBody = Record<string, any>> = Omit<RequestInit, 'method' | 'body'> & {
    body: TBody;
};

export const FetchMethods = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
} as const;

export type UseFetchCaller<TBody = Record<string, any>> = (
    url: string,
    options: UseFetchOptions<TBody>
) => void;

export interface UseFetchIssue {
    field: string;
    code: string;
    meta: any;
}

export type UseFetchReturnType<TData, TBody, TError, K = keyof typeof FetchMethods> = {
    loading: boolean;
    data: TData | null;
    error: TError | null;
    issues: UseFetchIssue[];
} & (K extends 'GET'
    ? {
          GET: UseFetchCaller<TBody>;
      }
    : K extends 'POST'
    ? {
          POST: UseFetchCaller<TBody>;
      }
    : K extends 'PUT'
    ? {
          PUT: UseFetchCaller<TBody>;
      }
    : K extends 'PATCH'
    ? {
          PATCH: UseFetchCaller<TBody>;
      }
    : K extends 'DELETE'
    ? {
          DELETE: UseFetchCaller<TBody>;
      }
    : Record<string, any>);
