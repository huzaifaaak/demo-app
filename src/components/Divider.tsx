import React from 'react';

import styled, { css } from 'styled-components/native';

import { useTranslation } from '@hooks/useTranslation';

export const DividerView = styled.View`
    flex-direction: row;
    width: 100%;
    align-items: center;
`;

export const DividerLine = styled.View`
    flex-grow: 1;
    height: 1px;
    background-color: ${({
        theme: {
            colors: { blackLight },
        },
    }) => blackLight};
`;

const Text = styled.Text(
    ({
        theme: {
            colors: { greyLight },
            components: {
                Text: { regular },
            },
        },
    }) => css`
        color: ${greyLight};
        font-size: ${regular}px;
        margin-right: 10px;
        margin-left: 10px;
        text-transform: uppercase;
    `
);

export function Divider() {
    const { tc } = useTranslation();
    return (
        <DividerView>
            <DividerLine />
            <Text>{tc('global.divider')}</Text>
            <DividerLine />
        </DividerView>
    );
}
