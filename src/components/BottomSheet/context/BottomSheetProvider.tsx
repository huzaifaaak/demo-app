import React, { useCallback, useRef } from 'react';

import Sheet from '@gorhom/bottom-sheet';

import { BottomSheetProviderProps } from '../BottomSheet.decl';

import { BottomSheetContext } from './BottomSheetContext';

export function BottomSheetProvider({ children }: BottomSheetProviderProps) {
    const sheetRefs = useRef<Record<string | number, Sheet>>({});

    const createSheetRef = useCallback(
        (id: string | number) => (ref: Sheet) => {
            sheetRefs.current[id] = ref;
        },
        [sheetRefs]
    );

    const getSheetRef = useCallback((id: string | number) => sheetRefs.current[id], [sheetRefs]);

    return (
        <BottomSheetContext.Provider value={{ getSheetRef, createSheetRef }}>
            {children}
        </BottomSheetContext.Provider>
    );
}
