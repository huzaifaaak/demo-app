import React from 'react';

export interface SelectOptionProps<T> {
    sheetId: string | number;
    handlePress(item: T): void;
    item: T;
    isSelected: boolean | undefined;
    labelKey: keyof T;
    optionRenderer?(item: T): React.ReactNode;
}
