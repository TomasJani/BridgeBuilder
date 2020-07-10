import React from 'react';
import "../styles/main-menu.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {LOGOUT_ROUTE, SERVER_BASE_URL} from "../constants";

export function MainMenu() {
    return (
        <nav className="menu">
            <a href="#" className="menu__item menu__brand">Bridge Builder</a>
            <form className="menu__search">
                <input type="text" placeholder="Search.."></input>
                <button type="submit"><FontAwesomeIcon icon={faSearch}/></button>
            </form>
            <ul className="menu__items">
                <li className="menu__item">
                    <a className="menu__link" href="#">Projects</a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href={`${SERVER_BASE_URL}${LOGOUT_ROUTE}`}>Logout</a>
                </li>
            </ul>
        </nav>
    )
}