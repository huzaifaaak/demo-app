import React from 'react';

import { useBottomSheet } from '@components/BottomSheet';
import { Button } from '@components/Button';

export default function InnerView() {
    const { expand } = useBottomSheet();

    return (
        <Button
            onPress={() => {
                expand();
            }}>
            Open bottom sheet
        </Button>
    );
}
