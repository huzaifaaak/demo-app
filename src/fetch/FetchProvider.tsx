import React, { useMemo } from 'react';

import { FetchContext } from './Fetch.context';

export interface FetchProviderProps {
    children: React.ReactNode;
    baseUrl?: string;
}

export function FetchProvider({ children, baseUrl = '//' }: FetchProviderProps) {
    const contextValues = useMemo(
        () => ({
            baseUrl,
        }),
        [baseUrl]
    );

    return <FetchContext.Provider value={contextValues}>{children}</FetchContext.Provider>;
}
