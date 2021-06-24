import React, { useMemo, useState } from 'react';

import { MetaContext } from './Meta.context';
import { MetaContextType, MetaProviderProps } from './Meta.decl';

export function MetaProvider({ children }: MetaProviderProps) {
    const [user, setUser] = useState<MetaContextType['user']>(null);
    const [vendor, setVendor] = useState<MetaContextType['vendor']>(null);
    const [catalog, setCatalog] = useState<MetaContextType['catalog']>(null);
    const metaValue = useMemo(
        () => ({
            user,
            vendor,
            catalog,
            setUser,
            setVendor,
            setCatalog,
            clearMeta() {
                setUser(null);
                setVendor(null);
                setCatalog(null);
            },
        }),
        [user, vendor, setUser, setVendor, catalog, setCatalog]
    );

    return <MetaContext.Provider value={metaValue}>{children}</MetaContext.Provider>;
}
