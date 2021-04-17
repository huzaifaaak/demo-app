import React from 'react';
import styled from 'styled-components/native';
import {TextInputProps} from '../../declarations/TextInput';

const Container = styled.View`
    width: 100%;
`;

const Wrapper = styled.View`
    flex-direction: row;
`;

const Label = styled.Text<{
    error?: boolean;
}>`
    margin-right: 5px;
    font-family: ${({error, theme: {font}}) => (error ? font.REGULAR : font.SEMI_BOLD)};
    font-size: ${({
        theme: {
            components: {Text},
        },
    }) => Text.fontSize}px;
    line-height: ${({
        theme: {
            components: {Text},
        },
    }) => Text.lineHeight}px;
    margin-top: ${({error}) => (error ? 5 : 0)}px;
    color: ${({error, theme: {colors}}) => (error ? colors.red : colors.greyDark)};
`;

const Asterisk = styled.Text`
    font-family: ${({theme: {font}}) => font.REGULAR};
    font-size: ${({
        theme: {
            components: {Text},
        },
    }) => Text.fontSize}px;
    line-height: ${({
        theme: {
            components: {Text},
        },
    }) => Text.lineHeight}px;
    color: ${({theme: {colors}}) => colors.red};
`;

const Input = styled.TextInput<{
    error?: string;
}>`
    margin-top: 8.5px;
    border-width: 1px;
    background-color: ${({
        theme: {
            components: {Input},
        },
    }) => Input.bg};
    height: ${({
        theme: {
            components: {Input},
        },
    }) => Input.h}px;
    border-radius: ${({
        theme: {
            components: {Input},
        },
    }) => Input.borderRadius}px;
    border-color: ${({
        error,
        theme: {
            components: {Input},
        },
    }) => (error ? Input.errorColor : Input.borderColor)};
    color: ${({
        theme: {
            components: {Input},
        },
    }) => Input.color};
`;

export function TextInput(props: TextInputProps) {
    const {label, required = true, error, onChange} = props;
    return (
        <Container>
            <Wrapper>
                <Label>{label}</Label>
                {required && <Asterisk>*</Asterisk>}
            </Wrapper>
            <Input error={error} onChange={onChange} />
            {!!error && <Label error={true}>{error}</Label>}
        </Container>
    );
}
