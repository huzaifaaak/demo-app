import { useCallback, useMemo } from 'react';

import { useTranslation as useInternalTranslation } from 'react-i18next';

export function useTranslation() {
    const { t: translate, ...rest } = useInternalTranslation();

    const te = useCallback((key: string) => translate(`error:${key}`), [translate]);

    const tc = useCallback((key: string) => translate(`content:${key}`), [translate]);

    const returnData = useMemo(
        () => ({
            tc,
            te,
            ...rest,
        }),
        [tc, te, rest]
    );

    return returnData;
}
