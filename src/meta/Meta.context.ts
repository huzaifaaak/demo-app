import { createContext } from 'react';

import { noop } from '@components/utils';

import { MetaContextType } from './Meta.decl';

export const MetaContext = createContext<MetaContextType>({
    user: null,
    vendor: null,
    catalog: null,
    setUser: noop,
    setVendor: noop,
    clearMeta: noop,
    setCatalog: noop,
});
