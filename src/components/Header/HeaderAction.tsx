import React from 'react';

import { useTheme } from '@shopify/restyle';

import { Icon } from '@components/Icon';

import { Theme } from '@theme/restyle';

import { useVariant } from '@hooks/useVariant';

import { HeaderActionProps } from './Header.decl';

export function HeaderAction({ icon, onPress }: HeaderActionProps) {
    const { activeOpacity } = useTheme<Theme>();
    const {
        style: {
            action: { spacing, ...actionStyles },
        },
    } = useVariant('Header');

    return (
        <Icon
            {...actionStyles}
            pressable
            icon={icon}
            alignItems="center"
            justifyContent="center"
            ml={spacing}
            activeOpacity={activeOpacity}
            onPress={onPress}
        />
    );
}
