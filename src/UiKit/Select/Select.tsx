import React, { JSXElementConstructor, useEffect, useState } from 'react';
import { Inputtext } from '../TextInput/TextInput';
import classes from './select.module.scss';
import cancel from '../images/cancel.svg';
import arrowBottom from '../images/arrow-bottom.svg';
import { ISelect } from './selectInterface';

export const Select: JSXElementConstructor<ISelect> = ({ value, onChange, placeholder }) => {

    const [openList, setOpenList] = useState<boolean>(false);
    const [searchInput, setSearchInput] = useState<string>('');

    const openHandler = () => setOpenList(prev => !prev);
    const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => setSearchInput(event.target.value);
    const cancelHandler = () => {
        setSearchInput('');
        onChange('');
    };
    const clickHandler = (event: any) => {
        const value = event.target.getAttribute('data-value');
        onChange(value);
        setOpenList(false);
    };

    const closer = (event: any) => {
        if (!event.target.classList.contains('list')) setOpenList(false);
    };


    useEffect(() => {

        document.addEventListener('click', closer);

        return () => document.removeEventListener('click', closer);

    }, []);

    const filterValue = (data: any[]) => {
        if (!searchInput) return data;

        return data.filter((e: string | number) => e.toString().includes(searchInput));
    };

    return (<div className={classes.wrapper}>
        <div>
            <Inputtext placeholder={placeholder ?? ''} value={searchInput} onChange={searchHandler} />
            <img onClick={cancelHandler} height={24} src={cancel} />
            <img onClick={openHandler} height={24} src={arrowBottom} />
        </div>
        <ul style={{ display: !openList && searchInput.length === 0 ? 'none' : 'block' }} className={classes.list}>
            {


                filterValue(value).map((elem: string | number) => (
                    <li
                        key={elem}
                        data-value={elem}
                        onClick={clickHandler}
                    >
                        {elem}
                    </li>
                ))
            }
        </ul>
    </div>);
};