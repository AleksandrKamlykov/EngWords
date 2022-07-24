import React, { FC, useRef } from "react";
import { Helmet } from "react-helmet";
import { InputFroWords } from "../../components/Shared/InputForWords/InputForWords";
import { dict } from '../../dic';
import { useCoords } from "../../hooks/useCoordinates";
import classes from './main.module.scss';

export const Main: FC = () => {



    return (<main className={classes.main}>
        <Helmet><title>EngWords</title></Helmet>
        <h1>Привіт!</h1>
        <p>Ми дуже раді що для вивчення англійских слів ти знайшов саме нас</p>
        <p>Ми починаючий самостійний некомерційний проєкт, тому будемо раді якщо ти спробуєш наш ресурс</p>
    </main>);
};