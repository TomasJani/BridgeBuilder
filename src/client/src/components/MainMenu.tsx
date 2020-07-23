import React from 'react';
import "../styles/main-menu.css"
import {LOGOUT_ROUTE, SERVER_BASE_URL} from "../constants";
import {Link} from "react-router-dom";

export function MainMenu() {
    return (
        <nav className="menu">
            <Link to="/" className="menu__item menu__brand">Bridge Builder</Link>
            <ul className="menu__items">
                <li className="menu__item">
                    <Link className="menu__link" to="/projects">Projects</Link>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href={`${SERVER_BASE_URL}${LOGOUT_ROUTE}`}>Logout</a>
                </li>
            </ul>
        </nav>
    )
}