import React, { useMemo } from 'react';

import styled, { useTheme } from 'styled-components/native';

import IconArrowLeftLine from '@icons/ArrowLeftLine';

import { Icon } from '@components/Icon';
import { IconBg } from '@components/IconBg';

import { HeaderContext } from './Header.context';
import { HeaderProps } from './Header.decl';

const Container = styled.View`
    flex-direction: row;
    width: 100%;
`;

export function Header({ onBack, children }: HeaderProps) {
    const {
        components: {
            Pressable: { activeOpacity },
        },
    } = useTheme();

    const contextValue = useMemo(() => ({ leftMargin: !!onBack }), [onBack]);

    return (
        <HeaderContext.Provider value={contextValue}>
            <Container>
                {onBack && (
                    <IconBg activeOpacity={activeOpacity} onPress={onBack}>
                        <Icon icon={IconArrowLeftLine} size={24} />
                    </IconBg>
                )}
                {children}
            </Container>
        </HeaderContext.Provider>
    );
}
