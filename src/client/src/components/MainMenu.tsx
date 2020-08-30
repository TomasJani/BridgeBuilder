import React, {useEffect} from 'react';
import "../styles/main-menu.css"
import {LOGIN_ROUTE, LOGOUT_ROUTE, SERVER_BASE_URL} from "../constants";
import {Link} from "react-router-dom";
import {inject, observer} from "mobx-react";
import {Stores} from "../stores/Stores";
import {UserStore} from "../stores/UserStore";
import {MainMenuAuthStatus} from "./MainMenuAuthStatus"

export interface IMainMenuProps {
    UserStore?: UserStore
}

export const MainMenu = inject(Stores.USER_STORE)(observer((props: IMainMenuProps) => {
    useEffect(() => {
        async function loadUser() {
            await props.UserStore?.login()
        }

        loadUser().then()
    }, [props.UserStore])

    return (
        <nav className="menu">
            <Link to="/" className="menu__item menu__brand">Bridge Builder</Link>
            <ul className="menu__items">
                <li className="menu__item">
                    <Link className="menu__link" to="/projects">Projects</Link>
                </li>
                <li className="menu__item">
                    <MainMenuAuthStatus loggedIn={props.UserStore?.user !== undefined}/>
                </li>
            </ul>
        </nav>
    )
}));
