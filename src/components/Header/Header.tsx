import React from 'react';

import Icon from 'react-native-remix-icon';

import styled, { useTheme } from 'styled-components/native';

import { HeaderProps } from './Header.decl';

const Container = styled.View`
    flex-direction: row;
    width: 100%;
    margin-top: 20px;
`;

const BackButton = styled.TouchableOpacity`
    height: 34px;
    width: 34px;
    background-color: ${({ theme: { colors } }) => colors.blackLighter};
    border-radius: 5px;
    margin-right: 15px;
    align-items: center;
    justify-content: center;
`;

const Heading = styled.Text`
    font-family: ${({ theme: { font } }) => font.BOLD};
    font-size: 24px;
    line-height: 36px;
`;

export function Header({ testID, back, onBack, children }: HeaderProps) {
    const {
        components: {
            Pressable: { activeOpacity },
        },
        colors: { white },
    } = useTheme();

    return (
        <Container testID={testID}>
            {back && (
                <BackButton activeOpacity={activeOpacity} onPress={onBack}>
                    <Icon name={'arrow-left-line'} size={'24'} color={white} />
                </BackButton>
            )}
            <Heading>{children}</Heading>
        </Container>
    );
}
