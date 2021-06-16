import React, { useMemo } from 'react';

import IconArrowLeftLine from '@icons/ArrowLeftLine';

import { Box } from '@components/Box';
import { Icon } from '@components/Icon';

import { Spacing } from '@theme/restyle/constants';

import { useVariant } from '@hooks/useVariant';

import { HeaderContext } from './Header.context';
import { HeaderProps } from './Header.decl';

export function Header({ onBack, children }: HeaderProps) {
    const {
        style: { back },
    } = useVariant('Header');
    const contextValue = useMemo(() => ({ leftMargin: !!onBack }), [onBack]);

    return (
        <HeaderContext.Provider value={contextValue}>
            <Box width="100%" flexDirection="row" alignItems="center">
                {onBack && (
                    <Icon
                        pressable
                        icon={IconArrowLeftLine}
                        onPress={onBack}
                        {...back}
                        alignItems="center"
                        mr={Spacing.SMALL}
                    />
                )}
                {children}
            </Box>
        </HeaderContext.Provider>
    );
}
