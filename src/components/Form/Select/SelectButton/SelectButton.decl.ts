import React from 'react';

export interface SelectButtonProps {
    sheetId: string | number;
    label: string;
    error?: string;
    required?: boolean;
    onPress?: () => void;
    children: React.ReactNode;
}
