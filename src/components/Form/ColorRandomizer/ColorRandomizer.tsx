import React, { useContext } from 'react';

import { Controller } from 'react-hook-form';

import { useTheme } from '@shopify/restyle';

import IconRefreshLine from '@icons/RefreshLine';

import { Box, TouchableBox } from '@components/Box';
import { Icon } from '@components/Icon';

import { Theme } from '@theme/restyle';

import { randomPastel } from '../../utils';
import { FormContext } from '../Form.context';

import { ColorRandomizerProps } from './ColorRandomizer.decl';

export function ColorRandomizer({ name }: ColorRandomizerProps) {
    const { control } = useContext(FormContext);

    const {
        colors,
        activeOpacity,
        ColorRandomizer: {
            defaults: { backgroundColor, button, ...blockStyle },
        },
    } = useTheme<Theme>();

    return (
        <Controller
            name={name}
            control={control!}
            render={({ field: { value, onChange } }) => (
                <Box
                    {...blockStyle}
                    overflow="hidden"
                    style={{ backgroundColor: value || colors[backgroundColor] }}>
                    <TouchableBox
                        {...button}
                        position="absolute"
                        bottom={0}
                        right={0}
                        alignItems="center"
                        justifyContent="center"
                        activeOpacity={activeOpacity}
                        onPress={() => {
                            onChange(randomPastel());
                        }}>
                        <Icon size={28} icon={IconRefreshLine} pressable />
                    </TouchableBox>
                </Box>
            )}
        />
    );
}
