import React from 'react';
import styled, { useTheme } from 'styled-components/native';
import Icon from 'react-native-remix-icon';

import { HeaderProps } from './Header.decl';

const Container = styled.View`
    flex-direction: row;
    width: 100%;
    margin-top: 20px;
`;

const IconBg = styled.TouchableOpacity`
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

export function Header({ testID, back, title, onBack }: HeaderProps) {
    const {
        components: {
            Pressable: { activeOpacity },
        },
    } = useTheme();

    return (
        <Container testID={testID}>
            {back && (
                <IconBg activeOpacity={activeOpacity} onPress={onBack}>
                    <Icon name={'arrow-left-line'} size={'24'} color={'white'} />
                </IconBg>
            )}
            <Heading>{title}</Heading>
        </Container>
    );
}
