import React from 'react';

import Icon from 'react-native-remix-icon';

import styled, { css, useTheme } from 'styled-components/native';

import { useBottomSheet } from '@components/BottomSheet';
import { ErrorText } from '@components/ErrorText';
import { Label, RedText } from '@components/Form/TextInput';

import { SelectButtonProps } from './SelectButton.decl';

const Container = styled.View``;

const Wrapper = styled.View`
    flex-direction: row;
`;

const SelectButtonWrapper = styled.Pressable<{ error?: string }>(
    ({
        theme: {
            components: {
                Pressable: { height, paddingHorizontal, paddingVertical, width },
            },
            colors: { blackLighter, red },
        },
        error,
    }) => css`
        height: ${height}px;
        width: ${width}%;
        padding: ${paddingVertical}px ${paddingHorizontal}px;
        justify-content: space-between;
        background-color: ${blackLighter};
        border-radius: 5px;
        flex-direction: row;
        border-width: 1px;
        border-color: ${error ? red : blackLighter};
        align-items: center;
    `
);

const LeftView = styled.View``;

export function SelectButton({
    sheetId,
    label,
    required = true,
    children,
    error,
    onPress,
}: SelectButtonProps) {
    const { expand } = useBottomSheet(sheetId);
    const {
        colors: { greyDark },
    } = useTheme();

    const handlePress = () => {
        expand();
        onPress?.();
    };

    return (
        <Container>
            <Wrapper>
                <Label>{label}</Label>
                {required && <RedText required>*</RedText>}
            </Wrapper>
            <SelectButtonWrapper error={error} onPress={handlePress}>
                <LeftView>{children}</LeftView>
                <Icon name={'arrow-right-s-line'} size={24} color={greyDark} />
            </SelectButtonWrapper>
            {error && <ErrorText>{error}</ErrorText>}
        </Container>
    );
}
