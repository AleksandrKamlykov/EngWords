import React, { FC, useState } from 'react';
import classes from './inputtext.module.scss';
import { IInputText } from './interfaceInputtext';

export const Inputtext: FC<IInputText> = ({ value, onChange, fullWidth, placeholder, disabled }: IInputText) => {


    return (
        <input className={classes.inputText} disabled={disabled} type='text' value={value || ''} onChange={onChange} placeholder={placeholder} />
    );
};