import React from 'react';

import { ICatalog, IUser, IVendor } from '@bridghq/types';

export interface MetaContextType {
    user: IUser.GetReturn | null;
    vendor: IVendor.GetReturn | null;
    catalog: ICatalog.GetReturn | null;
    setUser: React.Dispatch<React.SetStateAction<IUser.GetReturn | null>>;
    setVendor: React.Dispatch<React.SetStateAction<IVendor.GetReturn | null>>;
    setCatalog: React.Dispatch<React.SetStateAction<ICatalog.GetReturn | null>>;
    clearMeta: () => void;
}

export interface MetaProviderProps {
    children?: React.ReactNode;
}
