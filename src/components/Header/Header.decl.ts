import { ReactNode, ReactElement, ComponentType } from 'react';

export interface HeaderProps {
    testID?: string;
    onBack?: () => void;
    children?: ReactNode;
}

export interface HeadingProps {
    children: ReactNode;
}

export interface HeaderActionsProps {
    children: ReactElement<HeaderActionProps> | ReactElement<HeaderActionProps>[];
}

export interface HeaderActionProps {
    onPress?(): void;
    icon: ComponentType<{ height?: number; width?: number; fill?: string }>;
}

export interface HeaderComponent {
    (props: HeaderProps): JSX.Element;
    Title: (props: HeadingProps) => JSX.Element;
    Actions: (props: HeaderActionsProps) => JSX.Element;
    Action: (props: HeaderActionProps) => JSX.Element;
}
