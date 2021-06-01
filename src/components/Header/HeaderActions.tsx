import React from 'react';

import styled from 'styled-components/native';

import { HeaderActionsProps } from './Header.decl';

const Wrapper = styled.View`
    margin-left: auto;
    flex-shrink: 1;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
    flex-direction: row;
`;

export function HeaderActions({ children }: HeaderActionsProps) {
    return <Wrapper>{children}</Wrapper>;
}
