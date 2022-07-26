import React, { FC } from "react";
import { Link } from "react-router-dom";
import './header.scss';

export const Header: FC = () => {

    return (<header>
        <Link className="logo" to={'/'}>
            <div>ENGwords</div>
        </Link>

        <nav>
            <ul className="nav-list">
                <Link className="nav-item" to={'/'}> <li >Мої слова</li></Link>
                <Link className="nav-item" to={'/categories'}><li >Наборы</li></Link>
                <Link className="nav-item" to={'/'}><li >Інше</li></Link>
                <Link className="nav-item" to={'/study'}><li >На вивченні</li></Link>

            </ul>
        </nav>
    </header>);
};