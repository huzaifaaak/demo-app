import React, { useCallback, useContext, useMemo, useState } from 'react';

import { Controller } from 'react-hook-form';

import styled, { css, useTheme } from 'styled-components/native';

import { useTranslation } from '@hooks/useTranslation';

import { FormContext } from '../Form.context';
import { getIssue } from '../utils';

import { MultilineProps } from './Multiline.decl';

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
            components: { Multiline },
        },
    }) => css`
        padding: ${Multiline.p}px;
        border-width: 1px;
        background-color: ${Multiline.bg};
        border-radius: ${Multiline.borderRadius}px;
        border-color: ${error ? Multiline.errorColor : Multiline.borderColor};
        color: ${Multiline.color};
        text-align-vertical: ${Multiline.textAlignVertical};
    `
);

export function Multiline({ name, label, placeholder, required = true }: MultilineProps) {
    const { control, issues } = useContext(FormContext) || {};
    const { te } = useTranslation();
    const error = useMemo(() => getIssue(issues, name, te), [issues, name, te]);
    const {
        components: {
            Multiline: { minH, placeholderTextColor },
        },
    } = useTheme();
    const [height, setHeight] = useState(minH);
    const handleContentSizeChange = useCallback(
        (e) => {
            let h = e.nativeEvent.contentSize.height;

            if (h < minH) {
                h = minH;
            }

            setHeight(h);
        },
        [setHeight, minH]
    );

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
                        style={{ height }}
                        error={error}
                        onChangeText={onChange}
                        value={value}
                        placeholder={placeholder}
                        placeholderTextColor={placeholderTextColor}
                        onContentSizeChange={handleContentSizeChange}
                        multiline={true}
                    />
                    {!!error && <RedText>{error}</RedText>}
                </Container>
            )}
        />
    );
}
