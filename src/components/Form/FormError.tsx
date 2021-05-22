import React, { useContext } from 'react';

import { Banner } from '@components/Banner';

import { useTranslation } from '@hooks/useTranslation';

import { FormContext } from './Form.context';

export function FormError() {
    const { error, issues } = useContext(FormContext);
    const { te } = useTranslation();

    const returnType =
        !!error && !issues.length ? <Banner type="error" message={te(error.message)} /> : null;

    console.log('returnType', error, issues, returnType);

    return returnType;
}
