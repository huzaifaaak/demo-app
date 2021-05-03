import React, { useContext } from 'react';

import { Controller } from 'react-hook-form';

import { FormContext } from '../Form.context';

import { SelectProps } from './Select.decl';
import { SelectInternal } from './SelectInternal';

export function Select<T = Record<string, any>>({
    name,
    ...selectProps
}: Omit<SelectProps<T>, 'value' | 'onChange'>) {
    const { control } = useContext(FormContext) || {};

    return (
        <Controller
            name={name}
            control={control!}
            render={({ field: { onChange, value } }) => {
                return (
                    <SelectInternal
                        name={name}
                        {...selectProps}
                        value={value}
                        onChange={onChange}
                    />
                );
            }}
        />
    );
}
