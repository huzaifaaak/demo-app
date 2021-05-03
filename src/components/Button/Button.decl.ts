import { ReactNode } from 'react';

export interface ButtonProps {
    children?: ReactNode;
    testID?: string;
    disabled?: boolean;
    onPress: () => void;
}
