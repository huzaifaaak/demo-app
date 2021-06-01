import React from 'react';

import styled from 'styled-components/native';

import IconCheckFill from '@icons/CheckFill';

import { useBottomSheet } from '@components/BottomSheet';
import { Icon } from '@components/Icon';

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

    const onItemPress = () => {
        handlePress(item);
        collapse();
        close();
    };

    return (
        <Container onPress={onItemPress}>
            {optionRenderer ? optionRenderer(item) : <Text>{item[labelKey]}</Text>}
            {isSelected && <Icon icon={IconCheckFill} />}
        </Container>
    );
}
