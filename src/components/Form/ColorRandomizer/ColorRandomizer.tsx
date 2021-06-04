import React, { useContext } from 'react';

import { Controller } from 'react-hook-form';

import styled, { css, useTheme } from 'styled-components/native';

import IconRefreshLine from '@icons/RefreshLine';

import { Icon } from '@components/Icon';

import { randomPastel } from '../../utils';
import { FormContext } from '../Form.context';

import { ColorRandomizerProps } from './ColorRandomizer.decl';

const ColorBlock = styled.View<{ color?: string }>(
    ({
        color,
        theme: {
            colors: { primary },
            components: { ColorRandomizer },
        },
    }) => css`
        position: relative;
        height: ${ColorRandomizer.h}px;
        background-color: ${color || primary};
        overflow: hidden;
        border-radius: ${ColorRandomizer.borderRadius}px;
    `
);

const RandomizerButton = styled.TouchableOpacity(
    ({
        theme: {
            colors,
            components: { ColorRandomizer },
        },
    }) => css`
        position: absolute;
        right: 0;
        bottom: 0;
        align-items: center;
        justify-content: center;
        width: 46px;
        height: 46px;
        background: ${colors.blackLighter};
        border-top-left-radius: ${ColorRandomizer.borderRadius}px;
        border-bottom-right-radius: ${ColorRandomizer.borderRadius}px;
    `
);

export function ColorRandomizer({ name }: ColorRandomizerProps) {
    const { control } = useContext(FormContext);
    const {
        components: {
            Pressable: { activeOpacity },
        },
    } = useTheme();

    return (
        <Controller
            name={name}
            control={control!}
            render={({ field: { value, onChange } }) => (
                <ColorBlock color={value}>
                    <RandomizerButton
                        activeOpacity={activeOpacity}
                        onPress={() => {
                            onChange(randomPastel());
                        }}>
                        <Icon size={28} icon={IconRefreshLine} />
                    </RandomizerButton>
                </ColorBlock>
            )}
        />
    );
}
