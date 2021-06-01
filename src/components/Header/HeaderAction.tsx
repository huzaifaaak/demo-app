import React from 'react';

import styled, { useTheme } from 'styled-components/native';

import { Icon } from '@components/Icon';
import { IconBg } from '@components/IconBg';

import { HeaderActionProps } from './Header.decl';

const IconWrapper = styled(IconBg)`
    margin-left: 5px;
`;

export function HeaderAction({ icon, onPress }: HeaderActionProps) {
    const {
        components: {
            Pressable: { activeOpacity },
        },
    } = useTheme();

    return (
        <IconWrapper activeOpacity={activeOpacity} onPress={onPress}>
            <Icon icon={icon} size={24} />
        </IconWrapper>
    );
}
