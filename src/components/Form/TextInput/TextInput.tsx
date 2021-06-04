import React, { useCallback, useContext, useMemo } from 'react';

import { Controller } from 'react-hook-form';

import styled, { css, useTheme } from 'styled-components/native';

import { Icon } from '@components/Icon';

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

export const InputWrapper = styled.View<{
    error?: string;
}>(
    ({
        error,
        theme: {
            components: { TextInput },
        },
    }) => css`
        flex-direction: row;
        align-items: center;
        padding: ${TextInput.py}px ${TextInput.px}px;
        border-width: 1px;
        background-color: ${TextInput.bg};
        height: ${TextInput.h}px;
        border-radius: ${TextInput.borderRadius}px;
        border-color: ${error ? TextInput.errorColor : TextInput.borderColor};
    `
);

const Input = styled.TextInput<{ alignRight?: boolean }>(
    ({
        alignRight,
        theme: {
            components: { TextInput },
        },
    }) => css`
        width: 100%;
        flex-shrink: 1;
        padding: 0;
        border-width: 0;
        background-color: transparent;
        color: ${TextInput.color};
        text-align: ${alignRight ? 'right' : 'left'};
    `
);

const IconContainer = styled.View<{ alignRight?: boolean }>(
    ({
        alignRight,
        theme: {
            components: {
                TextInput: { icon },
            },
        },
    }) => {
        const margin = alignRight ? 'margin-left' : 'margin-right';

        return css`
            ${margin}: ${icon.spacing}px;
        `;
    }
);

const TextIcon = styled.Text(
    ({
        theme: {
            components: {
                TextInput: { icon },
            },
        },
    }) => css`
        flex-shrink: 0;
        font-size: ${icon.size}px;
        font-weight: ${icon.weight};
        line-height: ${icon.size + 5}px;
        color: ${icon.color};
    `
);

export function TextInput({
    name,
    label,
    required = true,
    secure,
    keyboardType,
    prefix,
    alignRight,
}: TextInputProps) {
    const { control, issues } = useContext(FormContext) || {};
    const {
        components: {
            TextInput: { icon: TextInputIcon },
        },
    } = useTheme();
    const { te } = useTranslation();
    const error = useMemo(() => getIssue(issues, name, te), [issues, name, te]);
    const shouldRenderIcon = !!prefix;
    const renderIcon = useCallback(() => {
        if (prefix) {
            if (typeof prefix === 'string') {
                return (
                    <IconContainer alignRight={alignRight}>
                        <TextIcon>{prefix}</TextIcon>
                    </IconContainer>
                );
            }

            return (
                <IconContainer alignRight={alignRight}>
                    <Icon icon={prefix} size={TextInputIcon.size} fill={TextInputIcon.color} />
                </IconContainer>
            );
        }
    }, [prefix, TextInputIcon.size, TextInputIcon.color, alignRight]);

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
                    <InputWrapper error={error}>
                        {!alignRight && shouldRenderIcon && renderIcon()}
                        <Input
                            alignRight={alignRight}
                            onChangeText={onChange}
                            secureTextEntry={secure}
                            keyboardType={keyboardType}
                            value={value}
                        />
                        {alignRight && shouldRenderIcon && renderIcon()}
                    </InputWrapper>
                    {!!error && <RedText>{error}</RedText>}
                </Container>
            )}
        />
    );
}
