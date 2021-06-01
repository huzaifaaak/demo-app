import React from 'react';

import styled, { css, useTheme } from 'styled-components/native';

import IconCheckboxCircleFill from '@icons/CheckboxCircleFill';
import IconInformationFill from '@icons/InformationFill';

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
    let Icon;
    let color = '';
    let bgColor = '';

    if (type === 'success') {
        Icon = IconCheckboxCircleFill;
        color = greenDarker;
        bgColor = greenLighter;
    } else {
        Icon = IconInformationFill;
        color = redDarker;
        bgColor = redLighter;
    }

    return (
        <Container color={bgColor}>
            <Wrapper>
                <IconView>
                    <Icon size={18} color={color} />
                </IconView>
                <Text color={color}>{message}</Text>
            </Wrapper>
        </Container>
    );
}
