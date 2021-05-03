import React from 'react';

import { UseFetchIssue } from '@fetch';

export interface FormProps<
    FormValue extends Record<string | number | symbol, any> = Record<string, any>,
    FormSchema = any
> {
    initialValue?: Partial<FormValue>;
    schema?: FormSchema;
    onSubmit?(formValues: FormValue): void;
    children: React.ReactNode;
    issues?: UseFetchIssue[];
}
