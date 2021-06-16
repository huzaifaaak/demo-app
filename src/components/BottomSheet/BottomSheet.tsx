import React, { useContext, useMemo } from 'react';

import { StyleSheet } from 'react-native';

import Sheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { Portal, PortalHost } from '@gorhom/portal';

import { Box } from '@components/Box';

import { BottomSheetProps } from './BottomSheet.decl';
import { BottomSheetBackground } from './BottomSheetBackground';
import { BottomSheetHandle } from './BottomSheetHandle';
import { BottomSheetContext } from './context/BottomSheetContext';

export function BottomSheet({ id, children, maxSnap = '80%' }: BottomSheetProps) {
    const { createSheetRef } = useContext(BottomSheetContext);
    const snapPoints = useMemo(() => ['0%', maxSnap], [maxSnap]);

    return (
        <>
            <Portal>
                <Box style={StyleSheet.absoluteFill}>
                    <Sheet
                        ref={createSheetRef(id)}
                        snapPoints={snapPoints}
                        backdropComponent={BottomSheetBackdrop}
                        backgroundComponent={BottomSheetBackground}
                        handleComponent={BottomSheetHandle}>
                        {children}
                    </Sheet>
                </Box>
            </Portal>
            <PortalHost name="BOTTOM_SHEET_HOST" />
        </>
    );
}
