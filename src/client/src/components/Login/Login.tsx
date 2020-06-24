import React, {Component} from 'react';
import '../../styles/login/login.css';
import {ReactComponent as GoogleIcon} from "./google_icon.svg";
import {LOGIN_ROUTE, LOGOUT_ROUTE, SERVER_BASE_URL} from "../../constants";

interface ILoginProps {

}

interface ILoginState {

}

export class Login extends Component<ILoginProps, ILoginState> {
    render() {
        return (
            <div>
                <div className="google-btn" onClick={this.login}>
                    <div className="google-icon-wrapper">
                        <GoogleIcon className="google-icon-svg"/>
                    </div>
                    <p className="btn-text"><b>Sign in with Google</b></p>
                </div>
            </div>
        )
    }

    login() {
        window.location.href = `${SERVER_BASE_URL}${LOGIN_ROUTE}`;
    }
}

