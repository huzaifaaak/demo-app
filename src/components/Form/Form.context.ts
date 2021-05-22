import { createContext } from 'react';

import { Control } from 'react-hook-form';

import { UseFetchIssue } from '@fetch';

export const FormContext = createContext<{
    initialValue?: any;
    control?: Control<Record<string, any>> | null;
    handleSubmit?: any;
    errors?: any;
    error?: any;
    issues: UseFetchIssue[];
}>({
    issues: [],
});
