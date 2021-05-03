import React from 'react';

import styled, { css, useTheme } from 'styled-components/native';

import { ButtonProps } from './Button.decl';

const Container = styled.TouchableOpacity<{ disabled?: boolean }>(
    ({
        disabled,
        theme: {
            components: { Button },
            colors,
        },
    }) => css`
        height: ${Button.h}px;
        width: 100%;
        align-items: center;
        justify-content: center;
        background-color: ${disabled ? colors.blackLighter : colors.primary};
        border-radius: 5px;
    `
);

const Title = styled.Text`
    /* color: ${({ theme: { colors } }) => colors.white}; */
    font-size: 13px;
    font-weight: 600;
    /* font-family: ${({ theme: { font } }) => font.SEMI_BOLD}; */
    line-height: 19px;
`;

export function Button({ disabled, onPress, testID, children }: ButtonProps) {
    const {
        components: {
            Pressable: { activeOpacity },
        },
    } = useTheme();

    return (
        <Container
            testID={testID}
            disabled={disabled}
            onPress={onPress}
            activeOpacity={activeOpacity}>
            <Title>{children}</Title>
        </Container>
    );
}
