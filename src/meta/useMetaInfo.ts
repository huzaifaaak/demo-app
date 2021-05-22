import { useContext } from 'react';

import { MetaContext } from './Meta.context';

export function useMetaInfo() {
    return useContext(MetaContext);
}
