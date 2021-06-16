import React from 'react';

import { useTheme } from '@shopify/restyle';

import { Box } from '@components/Box';

import { Theme } from '@theme/restyle';

export function BottomSheetHandle() {
    const {
        BottomSheet: {
            defaults: { handle },
        },
    } = useTheme<Theme>();

    return (
        <Box
            height={handle.height}
            width={handle.width}
            backgroundColor={handle.backgroundColor}
            alignSelf="center"
            my="s"
            borderRadius="rounded"
        />
    );
}
