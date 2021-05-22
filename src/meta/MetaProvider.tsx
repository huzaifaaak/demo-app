import React, { useMemo, useState } from 'react';

import { MetaContext } from './Meta.context';
import { MetaContextType, MetaProviderProps } from './Meta.decl';

export function MetaProvider({ children }: MetaProviderProps) {
    const [user, setUser] = useState<MetaContextType['user']>(null);
    const [vendor, setVendor] = useState<MetaContextType['vendor']>(null);

    const metaValue = useMemo(
        () => ({
            user,
            vendor,
            setUser,
            setVendor,
            clearMeta() {
                setUser(null);
                setVendor(null);
            },
        }),
        [user, vendor, setUser, setVendor]
    );

    return <MetaContext.Provider value={metaValue}>{children}</MetaContext.Provider>;
}
