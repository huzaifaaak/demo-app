import { createContext } from 'react';

export const HeaderContext = createContext<{ leftMargin: boolean }>({
    leftMargin: false,
});
