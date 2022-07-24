import React, { JSXElementConstructor } from 'react';
import { Button } from '../../UiKit/Button/Button';
import classes from './categoryItem.module.scss';

interface ICatgoryItem {
    title: string;
}

export const CategoryItem: JSXElementConstructor<ICatgoryItem> = ({ title }: ICatgoryItem) => {

    const handleClick = () => { };

    return (<div className={classes.wrapper}>
        <p>{title}</p>
        <div className={classes.img}>
            Logo
        </div>
        <Button color='primary' onClick={handleClick} fullWidth> Добавить </Button>
    </div>);
};