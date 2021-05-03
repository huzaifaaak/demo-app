import { createContext } from 'react';

export interface FetchContextOptions {
    baseUrl: string;
}

export const FetchContext = createContext<FetchContextOptions>({
    baseUrl: '//',
});
