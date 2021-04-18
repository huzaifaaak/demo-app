export interface ButtonProps {
    title: string;
    testID?: string;
    disabled?: boolean;
    onPress: () => void;
}
