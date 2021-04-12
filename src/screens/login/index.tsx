import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
    background-color: ${(p) => p.theme.colors.greyLighter};
    flex: 1;
`;

export default function index() {
    return <Container></Container>;
}
