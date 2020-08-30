import React from "react";
import {LOGIN_ROUTE, LOGOUT_ROUTE, SERVER_BASE_URL} from "../constants";

interface IMainMenuAuthStatus {
    loggedIn: boolean
}

export function MainMenuAuthStatus(props: IMainMenuAuthStatus) {
    return (
        <>
            {
                props.loggedIn
                    ?
                    <a className="menu__link" href={`${SERVER_BASE_URL}${LOGOUT_ROUTE}`}>
                        Logout
                    </a>
                    :
                    <a className="menu__link" href={`${SERVER_BASE_URL}${LOGIN_ROUTE}`}>
                        Login
                    </a>
            }
        </>
    )
}
