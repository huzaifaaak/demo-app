import React, { useMemo } from 'react';

import { Box } from '@components/Box';
import { Icon } from '@components/Icon';
import { Text } from '@components/Text';

import { useVariant } from '@hooks/useVariant';

import { BannerProps } from './Banner.decl';
import { getIcon } from './utils';

export function Banner({ message, variant, ...rest }: BannerProps) {
    const {
        style: { color, ...restStyle },
        variantValue,
    } = useVariant('Banner', variant);
    const IconComponent = useMemo(() => getIcon(variantValue), [variantValue]);

    return (
        <Box {...rest} alignItems="center" flexDirection="row" {...restStyle}>
            <Box mr="xs" flexShrink={0}>
                <Icon icon={IconComponent} size={18} fill={color} />
            </Box>
            <Text color={color}>{message}</Text>
        </Box>
    );
}
