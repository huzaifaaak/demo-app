import React from 'react';

import Icon from 'react-native-remix-icon';

import styled, { css, useTheme } from 'styled-components/native';

import { BannerProps } from './Banner.decl';

const Container = styled.View<{ color: string }>(
    ({
        theme: {
            components: {
                Alert: { h, width, padding, border },
            },
        },
        color,
    }) => css`
        min-height: ${h}px;
        width: ${width}%;
        padding: ${padding}px;
        justify-content: center;
        background-color: ${color};
        border-radius: ${border}px;
    `
);

const Wrapper = styled.View`
    flex-direction: row;
    align-items: center;
`;

const IconView = styled.View`
    margin-right: 11px;
`;

const Text = styled.Text<{
    color: string;
}>`
    color: ${({ color }) => color};
`;

export function Banner({ message, type }: BannerProps) {
    const {
        colors: { greenLighter, redLighter, greenDarker, redDarker },
    } = useTheme();
    let iconName = '';
    let color = '';
    let bgColor = '';

    if (type === 'success') {
        iconName = 'checkbox-circle-fill';
        color = greenDarker;
        bgColor = greenLighter;
    } else {
        iconName = 'information-fill';
        color = redDarker;
        bgColor = redLighter;
    }

    return (
        <Container color={bgColor}>
            <Wrapper>
                <IconView>
                    <Icon name={iconName} size={'18'} color={color} />
                </IconView>
                <Text color={color}>{message}</Text>
            </Wrapper>
        </Container>
    );
}
