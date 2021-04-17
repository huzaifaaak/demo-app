export interface TextInputProps {
    label: string;
    required?: boolean;
    error?: string;
    onChange: () => void;
}
