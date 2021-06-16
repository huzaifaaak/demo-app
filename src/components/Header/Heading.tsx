import React, { useContext } from 'react';

import { Text } from '@components/Text';

import { Spacing } from '@theme/restyle/constants';

import { useVariant } from '@hooks/useVariant';

import { HeaderContext } from './Header.context';
import { HeadingProps } from './Header.decl';

export function Heading({ children }: HeadingProps) {
    const {
        style: { title },
    } = useVariant('Header');
    const { leftMargin } = useContext(HeaderContext);

    return (
        <Text
            variant="heading"
            marginLeft={leftMargin ? title.spacing : Spacing.NONE}
            marginRight={title.spacing}>
            {children}
        </Text>
    );
}
