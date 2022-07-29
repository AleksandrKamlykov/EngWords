import React, { JSXElementConstructor } from 'react';
import { Button } from '../../UiKit/Button/Button';
import classes from './categoryItem.module.scss';

interface ICatgoryItem {
    title: string;
    amount: number;
}

export const CategoryItem: JSXElementConstructor<ICatgoryItem> = ({ title, amount }: ICatgoryItem) => {

    const handleClick = () => { };

    return (<div className={classes.wrapper}>
        <p>{title} <small>- {amount} слів</small></p>
        <div className={classes.img}>
            Logo
        </div>
        <Button color='primary' onClick={handleClick} fullWidth> Добавить </Button>
    </div>);
};