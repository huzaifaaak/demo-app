import React, { useCallback, useContext, useMemo, useState } from 'react';

import { Controller } from 'react-hook-form';

import { useTheme } from '@shopify/restyle';

import { Box } from '@components/Box';
import { MultiLineTextInput as TextInput } from '@components/MultilineTextInput';
import { Text } from '@components/Text';

import { Theme } from '@theme/restyle';

import { useTranslation } from '@hooks/useTranslation';

import { FormContext } from '../Form.context';
import { getIssue } from '../utils';

import { MultilineProps } from './Multiline.decl';

export function Multiline({ name, label, placeholder, required = true }: MultilineProps) {
    const {
        Multiline: {
            defaults: { redText, labelText, minH, placeholderTextColor },
        },
    } = useTheme<Theme>();

    const { control, issues } = useContext(FormContext) || {};
    const { te } = useTranslation();
    const error = useMemo(() => getIssue(issues, name, te), [issues, name, te]);

    const [height, setHeight] = useState(minH);
    const handleContentSizeChange = useCallback(
        (e) => {
            let h = e.nativeEvent.contentSize.height;

            if (h < minH) {
                h = minH;
            }

            setHeight(h);
        },
        [setHeight, minH]
    );

    return (
        <Controller
            name={name}
            control={control!}
            render={({ field: { value, onChange } }) => (
                <Box flex={1}>
                    <Box flexDirection="row">
                        <Text {...labelText} marginRight="xs" marginBottom="xs">
                            {label}
                        </Text>
                        {required && (
                            <Text {...redText} marginTop={required ? 'none' : 'xs'}>
                                *
                            </Text>
                        )}
                    </Box>
                    <TextInput
                        width="100%"
                        height={height}
                        borderRadius="regular"
                        borderColor={error ? 'red' : 'blackLighter'}
                        borderWidth={1}
                        onChangeText={onChange}
                        textAlignVertical={'top'}
                        value={value}
                        placeholder={placeholder}
                        placeholderTextColor={placeholderTextColor}
                        onContentSizeChange={handleContentSizeChange}
                        multiline={true}
                    />
                    {!!error && <Text fontFamily={redText.fontFamily}>{error}</Text>}
                </Box>
            )}
        />
    );
}
