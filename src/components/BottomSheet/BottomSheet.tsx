import React, { useContext, useMemo } from 'react';

import { StyleSheet } from 'react-native';

import Sheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { Portal, PortalHost } from '@gorhom/portal';
import styled, { css } from 'styled-components/native';

import { BottomSheetProps } from './BottomSheet.decl';
import { BottomSheetContext } from './context/BottomSheetContext';

const Container = styled.View`
    flex: 1;
`;

const BottomSheetBackground = styled.View(
    ({
        theme: {
            colors: { blackDark },
            components: {
                BottomSheet: { border },
            },
        },
    }) => css`
        background-color: ${blackDark};

        border-top-right-radius: ${border}px;
        border-top-left-radius: ${border}px;
    `
);

const BottomSheetHandle = styled.View`
    height: 7px;
    width: 50px;
    background-color: ${({
        theme: {
            colors: { greyDarker },
        },
    }) => greyDarker};
    align-self: center;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 999px;
`;

export function BottomSheet({ id, children, maxSnap = '80%' }: BottomSheetProps) {
    const { createSheetRef } = useContext(BottomSheetContext);
    const snapPoints = useMemo(() => ['0%', maxSnap], [maxSnap]);

    return (
        <>
            <Portal>
                <Container style={StyleSheet.absoluteFill}>
                    <Sheet
                        ref={createSheetRef(id)}
                        snapPoints={snapPoints}
                        backdropComponent={BottomSheetBackdrop as React.FC<any>}
                        backgroundComponent={BottomSheetBackground as React.FC<any>}
                        handleComponent={BottomSheetHandle as React.FC<any>}>
                        {children}
                    </Sheet>
                </Container>
            </Portal>
            <PortalHost name="BOTTOM_SHEET_HOST" />
        </>
    );
}
