export interface IButton {
    children: string;
    onClick: (event: React.MouseEvent) => void;
    size?: 'xs' | 'md' | 'lg' | undefined;
    color?: 'default' | 'warning' | 'success' | 'error' | 'primary' | 'active' | undefined;
    fullWidth?: boolean;
    type?: 'text';
}