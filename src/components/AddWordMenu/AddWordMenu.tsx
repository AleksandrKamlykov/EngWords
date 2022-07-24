import React, { JSXElementConstructor, memo, useCallback, useState } from 'react';
import { Button } from '../../UiKit/Button/Button';
import { Inputtext } from '../../UiKit/TextInput/TextInput';
import classes from './addWord.module.scss';

export const AddWordMenu: JSXElementConstructor<any> = memo(() => {

    const [mini, setMini] = useState<boolean>(true);
    const [newWord, setNewWord] = useState<string>('');

    const wrapperClasses = [classes.wrapper];

    const addNewWord = useCallback(() => {
        setNewWord('');
    }, []);

    const miniHandler = useCallback(
        () => setMini(prev => !prev),
        []);

    const wordHandler = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => setNewWord(event.target.value),
        []);

    if (!mini) { wrapperClasses.push(classes.show); }

    return (<div className={wrapperClasses.join(' ')}>
        <Button onClick={miniHandler} >{!mini ? '-' : '+'}</Button>


        <Inputtext placeholder='Введіть слово' value={newWord} onChange={wordHandler} />
        <Button onClick={addNewWord}>Додати у словник</Button>

    </div>);
});
