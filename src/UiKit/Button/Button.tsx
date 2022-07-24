import { FC, memo, useMemo } from "react";
import classes from './button.module.scss';
import { IButton } from "./interfaceButton";



export const Button: FC<IButton> = ({ children, size, onClick, color, fullWidth }: IButton) => {

    const classArr = [classes.btn, classes.inher];

    if (size) {
        classArr.push(classes[size]);
    } else {
        classArr.push(classes.md);
    }

    if (color) {
        classArr.push(classes[color]);
    } else {
        classArr.push(classes.default);

    }

    return (
        <button style={{ width: fullWidth ? '100%' : 'auto' }} onClick={onClick} className={classArr.join(' ')}>
            {children}
        </button>
    );
};