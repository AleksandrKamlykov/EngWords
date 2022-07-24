export interface ISelect {
    value: string[] | number[] | undefined;
    onChange: (data: string) => void;
    placeholder?: string;
}