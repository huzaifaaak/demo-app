import { ReactNode } from 'react';

export interface HeaderProps {
    testID?: string;
    back?: boolean;
    onBack?: () => void;
    children?: ReactNode;
}
