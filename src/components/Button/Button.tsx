import React from 'react';

import { useRestyle } from '@shopify/restyle';

import { TouchableBox } from '@components/Box';
import { Text } from '@components/Text';

import { RestyleFunctions } from '@theme/restyle/functions';

import { useVariant } from '@hooks/useVariant';

import { ButtonProps } from './Button.decl';

export function Button({ variant, disabled, onPress, testID, children, ...rest }: ButtonProps) {
    const {
        style: { fontSize, lineHeight, color, ...restStyles },
    } = useVariant('Button', disabled ? 'disabled' : variant);
    const containerProps = useRestyle(RestyleFunctions, {
        ...rest,
        ...restStyles,
    });
    const textProps = useRestyle(RestyleFunctions, { fontSize, lineHeight, color });

    return (
        <TouchableBox
            testID={testID}
            disabled={disabled}
            onPress={onPress}
            {...containerProps}
            alignItems="center"
            flexDirection="row"
            activeOpacity={0.75}>
            <Text {...textProps}>{children}</Text>
        </TouchableBox>
    );
}
