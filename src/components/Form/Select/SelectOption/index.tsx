import React from 'react';

import IconCheckFill from '@icons/CheckFill';

import { useBottomSheet } from '@components/BottomSheet';
import { TouchableBox } from '@components/Box';
import { Icon } from '@components/Icon';
import { Text } from '@components/Text';

import { Color } from '@theme/colors';

import { useVariant } from '@hooks/useVariant';

import { SelectOptionProps } from './SelectOption.decl';

export function SelectOption<T = Record<string, any>>({
    sheetId,
    handlePress,
    item,
    isSelected,
    labelKey,
    optionRenderer,
}: SelectOptionProps<T>) {
    const {
        style: { option },
    } = useVariant('Select');
    const { close, collapse } = useBottomSheet(sheetId);

    const onItemPress = () => {
        handlePress(item);
        collapse();
        close();
    };

    return (
        <TouchableBox onPress={onItemPress} {...option} flexDirection="row" alignItems="center">
            {optionRenderer ? optionRenderer(item) : <Text>{item[labelKey]}</Text>}
            {isSelected && (
                <Icon icon={IconCheckFill} style={{ marginLeft: 'auto' }} fill={Color.green} />
            )}
        </TouchableBox>
    );
}
