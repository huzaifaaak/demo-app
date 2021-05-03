import React, { useContext } from 'react';

import { Button } from '@components/Button';

import { FormContext } from '../Form.context';

import { FormSubmitProps } from './FormSubmit.decl';

export function FormSubmit({ children, ...buttonProps }: FormSubmitProps) {
    const { handleSubmit } = useContext(FormContext);

    return (
        <Button {...buttonProps} onPress={handleSubmit}>
            {children}
        </Button>
    );
}
