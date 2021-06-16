import React, { useCallback, useContext, useMemo, useRef } from 'react';

import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { BottomSheetFlatListProps } from '@gorhom/bottom-sheet/lib/typescript/components/flatList/types';
import { uniqueId } from 'lodash-es';

import { BottomSheet } from '@components/BottomSheet';
import { Box } from '@components/Box';
import { Header } from '@components/Header';
import { Text } from '@components/Text';

import { Spacing } from '@theme/restyle/constants';

import { useTranslation } from '@hooks/useTranslation';
import { useVariant } from '@hooks/useVariant';

import { FormContext } from '../Form.context';
import { getIssue } from '../utils';

import { SelectProps } from './Select.decl';
import { SelectButton } from './SelectButton';
import { SelectOption } from './SelectOption';
import { getSelectedValue } from './utils';

export function SelectInternal<T>({
    name,
    label,
    placeholder,
    options,
    value,
    valueKey,
    labelKey,
    required = true,
    labelRenderer,
    optionRenderer,
    onChange,
}: SelectProps<T>) {
    const sheetId = useRef(uniqueId('select-sheet-'));
    const { issues } = useContext(FormContext);
    const selected = useMemo<T | undefined>(() => getSelectedValue(options, valueKey, value), [
        options,
        valueKey,
        value,
    ]);

    const { te } = useTranslation();

    const error = useMemo(() => getIssue(issues, name, te), [issues, name, te]);

    const {
        style: { placeholder: placeholderStyle },
    } = useVariant('Select', error ? 'error' : 'defaults');

    const renderOption: BottomSheetFlatListProps<T>['renderItem'] = useCallback(
        ({ item }) => {
            const isSelected = selected && selected[valueKey] === item[valueKey];
            const handlePress = (item: T) => {
                onChange(item[valueKey]);
            };

            return (
                <SelectOption<T>
                    optionRenderer={optionRenderer}
                    item={item}
                    labelKey={labelKey}
                    isSelected={isSelected}
                    handlePress={handlePress}
                    sheetId={sheetId.current}
                />
            );
        },
        [labelKey, selected, onChange, optionRenderer, valueKey]
    );

    return (
        <>
            <SelectButton error={error} label={label} required={required} sheetId={sheetId.current}>
                {selected ? (
                    <Text>{labelRenderer(selected)}</Text>
                ) : (
                    <Text {...placeholderStyle}>{placeholder}</Text>
                )}
            </SelectButton>
            <BottomSheet id={sheetId.current}>
                <Box px={Spacing.LARGE} my={Spacing.MEDIUM}>
                    <Header>
                        <Header.Title>{label}</Header.Title>
                    </Header>
                </Box>
                <BottomSheetFlatList<T>
                    data={options}
                    renderItem={renderOption}
                    keyExtractor={(item) => item[valueKey] as any}
                />
            </BottomSheet>
        </>
    );
}
