import React from 'react';
import '../../styles/login/login.css';
import {ReactComponent as GoogleIcon} from "./google_icon.svg";
import {AUTHENTICATED_HOME_ROUTE, LOGIN_ROUTE, SERVER_BASE_URL} from "../../constants";
import {UserStore} from "../../stores/UserStore";
import {useHistory} from "react-router-dom"
import {inject, observer} from "mobx-react";
import {Stores} from "../../stores/Stores";
import {useAuthRedirect} from "../../hooks/useAuthRedirect";
import {useRewriteUrl} from "../../hooks/useRewriteUrl";

interface ILoginProps {
    UserStore?: UserStore
}

export const Login = inject(Stores.USER_STORE)(observer((props: ILoginProps) => {
    let history = useHistory()
    useAuthRedirect(history, true, AUTHENTICATED_HOME_ROUTE, props.UserStore)
    useRewriteUrl(history, "/login")

    const login = () => {
        window.location.href = `${SERVER_BASE_URL}${LOGIN_ROUTE}`;
    }

    return (
        <div className={"login__container"}>
            <h2 style={{color: "black", textAlign: "center",marginLeft:"8px"}}>Connect.Build.Thrive.</h2>
            <div className="login__google-btn" onClick={login}>
                <div className="google-icon-wrapper">
                    <GoogleIcon className="login__google-icon__svg"/>
                </div>
                <p className="login__google-btn__text"><b>Sign in with Google</b></p>
            </div>
        </div>
    )
}))

export default Login
