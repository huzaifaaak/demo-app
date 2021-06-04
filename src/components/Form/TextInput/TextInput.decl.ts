import { ComponentType } from 'react';

import { KeyboardTypeOptions } from 'react-native';

export interface TextInputProps {
    name: string;
    label: string;
    required?: boolean;
    secure?: boolean;
    keyboardType?: KeyboardTypeOptions;
    alignRight?: boolean;
    prefix?: string | ComponentType<IconProps>;
}
