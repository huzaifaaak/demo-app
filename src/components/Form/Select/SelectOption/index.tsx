import React from 'react';

import Icon from 'react-native-remix-icon';

import styled, { useTheme } from 'styled-components/native';

import { useBottomSheet } from '@components/BottomSheet';

import { SelectOptionProps } from './SelectOption.decl';

const Container = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 20px;
    align-items: center;
`;

const Text = styled.Text``;

export function SelectOption<T = Record<string, any>>({
    sheetId,
    handlePress,
    item,
    isSelected,
    labelKey,
    optionRenderer,
}: SelectOptionProps<T>) {
    const { close, collapse } = useBottomSheet(sheetId);

    const {
        colors: { white },
    } = useTheme();

    const onItemPress = () => {
        handlePress(item);
        collapse();
        close();
    };

    return (
        <Container onPress={onItemPress}>
            {optionRenderer ? optionRenderer(item) : <Text>{item[labelKey]}</Text>}
            {isSelected && <Icon name={'ri-check-fill'} size={'24'} color={white} />}
        </Container>
    );
}
