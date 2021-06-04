import { useCallback, useContext, useEffect, useState } from 'react';

import { BottomSheetContext } from './BottomSheetContext';

export function useBottomSheet(id: string | number) {
    const { getSheetRef } = useContext(BottomSheetContext);
    const [sheetRef, setSheetRef] = useState(getSheetRef(id));

    useEffect(() => {
        setTimeout(() => {
            setSheetRef(getSheetRef(id));
        }, 0);
    }, [getSheetRef, id, sheetRef]);

    const close = useCallback(() => {
        sheetRef?.close();
    }, [sheetRef]);

    const collapse = useCallback(() => {
        sheetRef?.collapse?.();
    }, [sheetRef]);

    const expand = useCallback(() => {
        sheetRef?.expand?.();
    }, [sheetRef]);

    const snapTo = useCallback(
        (index: number) => {
            sheetRef?.snapTo?.(index);
        },
        [sheetRef]
    );

    return {
        close,
        collapse,
        expand,
        snapTo,
    };
}
