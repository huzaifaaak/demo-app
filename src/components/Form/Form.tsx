import React, { useMemo } from 'react';

import { SubmitHandler, useForm, UseFormProps } from 'react-hook-form';

import { PortalProvider } from '@gorhom/portal';
import { zodResolver } from '@hookform/resolvers/zod';

import { noop } from '@components/util';

import { FormContext } from './Form.context';
import { FormProps } from './Form.decl';

export function Form<T = any, K = any>({
    initialValue = {},
    schema,
    issues = [],
    onSubmit = noop,
    children,
    error,
}: FormProps<T, K>) {
    const formProps = useMemo<UseFormProps<FormProps['initialValue'] | any>>(
        () => ({
            ...(schema ? { resolver: zodResolver<FormProps['schema']>(schema) } : {}),
            defaultValues: initialValue,
        }),
        [schema, initialValue]
    );

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm(formProps);

    const contextProps = useMemo(
        () => ({
            initialValue,
            control,
            handleSubmit: handleSubmit(onSubmit as SubmitHandler<T>),
            errors,
            error,
            issues,
        }),
        [initialValue, control, handleSubmit, errors, error, issues, onSubmit]
    );

    return (
        <FormContext.Provider value={contextProps}>
            <PortalProvider>{children}</PortalProvider>
        </FormContext.Provider>
    );
}
