import React from 'react';
import styled, { css } from 'styled-components/native';

import { TextInputProps } from './TextInput.decl';

const Container = styled.View`
    width: 100%;
`;

const Wrapper = styled.View`
    flex-direction: row;
`;

const Label = styled.Text(
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
    `
);

const RedText = styled(Label)(
    ({ theme: { colors, font } }) => css`
        margin: 5px 0 0 0;
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
        margin-top: 8.5px;
        border-width: 1px;
        background-color: ${Input.bg};
        height: ${Input.h}px;
        border-radius: ${Input.borderRadius}px;
        border-color: ${error ? Input.errorColor : Input.borderColor};
        color: ${Input.color};
    `
);

export function TextInput(props: TextInputProps) {
    const { label, required = true, error, onChange } = props;
    return (
        <Container>
            <Wrapper>
                <Label>{label}</Label>
                {required && <RedText>*</RedText>}
            </Wrapper>
            <Input error={error} onChange={onChange} />
            {!!error && <RedText>{error}</RedText>}
        </Container>
    );
}
