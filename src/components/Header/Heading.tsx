import React, { useContext } from 'react';

import styled, { css } from 'styled-components/native';

import { HeaderContext } from './Header.context';
import { HeadingProps } from './Header.decl';

export const HeadingStyle = styled.Text<{ leftMargin?: boolean }>(
    ({
        leftMargin = 0,
        theme: {
            font,
            components: {
                Header: { fontSize, lineHeight, spacing },
            },
        },
    }) => css`
        width: 100%;
        flex-shrink: 1;
        font-family: ${font.BOLD};
        font-size: ${fontSize}px;
        line-height: ${lineHeight}px;
        margin-left: ${leftMargin ? spacing : 0}px;
        margin-right: ${spacing}px;
    `
);

export function Heading({ children }: HeadingProps) {
    const { leftMargin } = useContext(HeaderContext);

    return <HeadingStyle leftMargin={leftMargin}>{children}</HeadingStyle>;
}
