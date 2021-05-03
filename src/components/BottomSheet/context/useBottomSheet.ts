import { useCallback, useContext } from 'react';

import { BottomSheetContext } from './BottomSheetContext';

export function useBottomSheet(id: string | number) {
    const { getSheetRef } = useContext(BottomSheetContext);
    const sheetRef = getSheetRef(id);

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
