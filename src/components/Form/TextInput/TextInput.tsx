import React, { useCallback, useContext, useMemo } from 'react';

import { Controller } from 'react-hook-form';

import { Box } from '@components/Box';
import { Icon } from '@components/Icon';
import { Text } from '@components/Text';
import { TextInput as Input } from '@components/TextInput';

import { colors } from '@theme/colors';
import { Spacing } from '@theme/restyle/constants';

import { useTranslation } from '@hooks/useTranslation';
import { useVariant } from '@hooks/useVariant';

import { FormContext } from '../Form.context';
import { getIssue } from '../utils';

import { TextInputProps } from './TextInput.decl';

export function TextInput({
    name,
    label,
    required = true,
    secure,
    keyboardType,
    prefix,
    placeholder,
    alignRight,
}: TextInputProps) {
    const { control, issues } = useContext(FormContext) || {};
    const { te } = useTranslation();
    const error = useMemo(() => getIssue(issues, name, te), [issues, name, te]);
    const {
        style: {
            label: labelStyle,
            icon,
            subtext,
            required: requiredStyle,
            input: { placeholderTextColor, ...inputStyle },
            ...wrapperProps
        },
    } = useVariant('TextInput', error ? 'error' : 'defaults');
    const marginProps = useMemo(
        () => ({ [alignRight ? 'marginLeft' : 'marginRight']: icon.spacing }),
        [alignRight, icon.spacing]
    );
    const shouldRenderIcon = !!prefix;

    const renderIcon = useCallback(() => {
        if (prefix) {
            if (typeof prefix === 'string') {
                return (
                    <Box {...marginProps}>
                        <Text color={icon.color} fontSize={icon.size} fontWeight="bold">
                            {prefix}
                        </Text>
                    </Box>
                );
            }

            return (
                <Box {...marginProps}>
                    <Icon icon={prefix} size={icon.size} fill={icon.color} />
                </Box>
            );
        }
    }, [prefix, marginProps, icon]);

    return (
        <Controller
            name={name}
            control={control!}
            render={({ field: { value, onChange } }) => (
                <>
                    {!!label && (
                        <Text {...labelStyle}>
                            {label} {required && <Text {...requiredStyle}>*</Text>}
                        </Text>
                    )}
                    <Box {...wrapperProps} flexDirection="row" alignItems="center">
                        {!alignRight && shouldRenderIcon && renderIcon()}
                        <Input
                            {...inputStyle}
                            placeholderTextColor={colors[placeholderTextColor]}
                            placeholder={placeholder}
                            width="100%"
                            px={Spacing.NONE}
                            textAlign={alignRight ? 'right' : 'left'}
                            onChangeText={onChange}
                            secureTextEntry={secure}
                            keyboardType={keyboardType}
                            value={value}
                        />
                        {alignRight && shouldRenderIcon && renderIcon()}
                    </Box>
                    {!!error && (
                        <Text color={subtext.color} marginTop={Spacing.XSMALL}>
                            {error}
                        </Text>
                    )}
                </>
            )}
        />
    );
}
