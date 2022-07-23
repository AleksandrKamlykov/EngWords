import { FC, memo, useMemo } from "react";
import classes from './button.module.scss';
import { IButton } from "./interfaceButton";



export const Button: FC<IButton> = memo(({ children, size, onClick, color }: IButton) => {

    const classArr = useMemo(() => {
        const cls = [classes.btn, classes.inher];

        if (size) {
            cls.push(classes[size]);
        } else {
            cls.push(classes.md);
        }

        if (color) {
            cls.push(classes[color]);
        } else {
            cls.push(classes.default);

        }

        return cls;
    }
        , []);



    return (
        <button onClick={onClick} className={classArr.join(' ')}>
            {children}
        </button>
    );
});