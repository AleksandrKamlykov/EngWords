export interface IInputText {
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    fullWidth?: boolean | undefined;
    placeholder?: string;
    disabled?: boolean | undefined;
}