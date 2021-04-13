import React from 'react';
import styled from 'styled-components/native';
import { Button } from '../../components/Button';

const Container = styled.View`
    flex: 1;
    padding: ${p => p.theme.components.Container.padding}px;
`;

export default function index() {
    return (
        <Container>
            <Button testID={"loginButton"} title={"Create account"} onPress={() => { }} disabled={false} />
        </Container>
    )
}
