import React from 'react';

import { BottomSheetBackgroundProps } from '@gorhom/bottom-sheet';
import { useTheme } from '@shopify/restyle';

import { Box } from '@components/Box';

import { Theme } from '@theme/restyle';

export function BottomSheetBackground({ style }: BottomSheetBackgroundProps) {
    const { BottomSheet } = useTheme<Theme>();

    return (
        <Box
            flex={1}
            bg={BottomSheet.defaults.backgroundColor}
            borderTopLeftRadius="curved"
            borderTopRightRadius="curved"
            style={style}
        />
    );
}
