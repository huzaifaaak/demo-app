import React from 'react';

export interface BottomSheetProviderProps {
    children?: React.ReactNode;
}

export interface BottomSheetProps {
    id: string | number;
    children?: React.ReactNode;
    maxSnap?: string;
}
