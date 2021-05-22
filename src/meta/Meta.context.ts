import { createContext } from 'react';

import { noop } from '@components/util';

import { MetaContextType } from './Meta.decl';

export const MetaContext = createContext<MetaContextType>({
    user: null,
    vendor: null,
    setUser: noop,
    setVendor: noop,
    clearMeta: noop,
});
