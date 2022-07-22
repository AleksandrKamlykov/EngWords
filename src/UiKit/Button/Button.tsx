import { FC } from "react";
import classes from './button.module.scss';
import { IButton } from "./interfaceButton";



export const Button: FC<IButton> = ({ children, size, onClick, color }: IButton) => {

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
        <button onClick={onClick} className={classArr.join(' ')}>
            {children}
        </button>
    );
};