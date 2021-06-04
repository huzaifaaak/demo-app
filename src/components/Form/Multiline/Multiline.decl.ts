import { TextInputProps } from 'react-native';

export interface MultilineProps
    extends Omit<
        TextInputProps,
        'multiline' | 'numberOfLines' | 'secure' | 'keyboardType' | 'style' | 'placeholderTextColor'
    > {
    name: string;
    label: string;
    required?: boolean;
    placeholder?: string;
}
