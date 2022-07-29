import React, { JSXElementConstructor, useState } from 'react';
import classes from './auth.module.scss';

export const Auth: JSXElementConstructor<any> = () => {

    const [activeWindow, setActiveWindow] = useState<number>(1);

    return (<div className={classes.wrapper}>
        <div className={classes.login}></div>
        <div className={classes.register}></div>
    </div>);
};