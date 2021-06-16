import React from 'react';

import IconArrowRightSLine from '@icons/ArrowRightSLine';

import { useBottomSheet } from '@components/BottomSheet';
import { Box, TouchableBox } from '@components/Box';
import { Icon } from '@components/Icon';
import { Text } from '@components/Text';

import { Color } from '@theme/colors';
import { Spacing } from '@theme/restyle/constants';

import { useVariant } from '@hooks/useVariant';

import { SelectButtonProps } from './SelectButton.decl';

export function SelectButton({
    sheetId,
    label,
    required = true,
    children,
    error,
    onPress,
}: SelectButtonProps) {
    const {
        style: { required: requiredStyle, option, placeholder, label: labelStyle, ...selectStyle },
    } = useVariant('Select', error ? 'error' : 'defaults');
    const { expand } = useBottomSheet(sheetId);

    const handlePress = () => {
        expand();
        onPress?.();
    };

    return (
        <Box>
            <Text {...labelStyle}>
                {label} {required && <Text {...requiredStyle}>*</Text>}
            </Text>
            <TouchableBox
                onPress={handlePress}
                alignItems="center"
                flexDirection="row"
                {...selectStyle}>
                <Box alignItems="center">{children}</Box>
                <Icon
                    icon={IconArrowRightSLine}
                    fill={Color.greyDarker}
                    style={{ marginLeft: 'auto' }}
                />
            </TouchableBox>
            {error && <Text mt={Spacing.XSMALL}>{error}</Text>}
        </Box>
    );
}
