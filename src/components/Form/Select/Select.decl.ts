import React from 'react';

export type SelectValue = number | string | boolean | undefined;
export type SelectOnChange<T> = (data: T[keyof T]) => void;
export type SelectLabelRenderer<T> = (selected: T) => React.ReactNode;
export type SelectOptionRenderer<T> = (option: T) => React.ReactNode;

export interface SelectProps<T> {
    name: string;
    options: T[];
    value: SelectValue;
    valueKey: keyof T;
    labelKey: keyof T;
    placeholder?: string;
    label: string;
    error?: string;
    required?: boolean;
    onChange: SelectOnChange<T>;
    labelRenderer: SelectLabelRenderer<T>;
    optionRenderer?: SelectOptionRenderer<T>;
}
