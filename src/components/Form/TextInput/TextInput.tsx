import React, { useContext, useMemo } from 'react';

import { Controller } from 'react-hook-form';

import styled, { css } from 'styled-components/native';

import { useTranslation } from '@hooks/useTranslation';

import { FormContext } from '../Form.context';
import { getIssue } from '../utils';

import { TextInputProps } from './TextInput.decl';

const Container = styled.View`
    flex: 1;
`;

const Wrapper = styled.View`
    flex-direction: row;
`;

export const Label = styled.Text(
    ({
        theme: {
            font,
            colors,
            components: { Text },
        },
    }) => css`
        margin-right: 5px;
        font-family: ${font.SEMI_BOLD};
        font-size: ${Text.fontSize}px;
        line-height: ${Text.lineHeight}px;
        color: ${colors.greyDark};
        margin-bottom: 5px;
    `
);

export const RedText = styled(Label)<{
    required?: boolean;
}>(
    ({ theme: { colors, font }, required }) => css`
        margin: ${required ? 0 : 5}px 0 0 0;
        color: ${colors.red};
        font-family: ${font.REGULAR};
    `
);

const Input = styled.TextInput<{
    error?: string;
}>(
    ({
        error,
        theme: {
            components: { Input },
        },
    }) => css`
        border-width: 1px;
        background-color: ${Input.bg};
        height: ${Input.h}px;
        border-radius: ${Input.borderRadius}px;
        border-color: ${error ? Input.errorColor : Input.borderColor};
        color: ${Input.color};
    `
);

export function TextInput({ name, label, required = true, secure, keyboardType }: TextInputProps) {
    const { control, issues } = useContext(FormContext) || {};
    const { te } = useTranslation();
    const error = useMemo(() => getIssue(issues, name, te), [issues, name, te]);

    return (
        <Controller
            name={name}
            control={control!}
            render={({ field: { value, onChange } }) => (
                <Container>
                    <Wrapper>
                        <Label>{label}</Label>
                        {required && <RedText required>*</RedText>}
                    </Wrapper>
                    <Input
                        error={error}
                        onChangeText={onChange}
                        secureTextEntry={secure}
                        keyboardType={keyboardType}
                        value={value}
                    />
                    {!!error && <RedText>{error}</RedText>}
                </Container>
            )}
        />
    );
}
