import React, { FC, ReactElement } from 'react';
import classes from './answerButton.module.scss';

interface IAnswerButton {
    children: string | ReactElement;
    avaliable: boolean;
    onClick: () => void;
}

export const AnswerButton: FC<IAnswerButton> = ({ children, avaliable, onClick }: IAnswerButton) => {


    return (<button disabled={!avaliable} onClick={onClick} className={classes.answerBtn}>
        {children}
    </button>);
};