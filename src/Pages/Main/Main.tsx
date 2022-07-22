import React, { FC } from "react";
import { InputFroWords } from "../../components/Shared/InputForWords/InputForWords";
import { dict } from '../../dic';
import classes from './main.module.scss';

export const Main: FC = () => {

    return (<main className={classes.main}>
        <h1>Привіт!</h1>
        <p>Ми дуже раді що для вивчення англійских слів ти знайшов саме нас</p>
        <p>Ми починаючий самостійний некомерційний проєкт, тому будемо раді якщо ти спробуєш наш ресурс</p>
    </main>);
};