import React, {Component} from 'react';
import '../../styles/login/login.css';
import {ReactComponent as GoogleIcon} from "./google_icon.svg";
import {LOGIN_ROUTE, SERVER_BASE_URL} from "../../constants";
import {inject, observer} from "mobx-react";
import {Stores} from "../../stores/Stores";
import {UserStore} from "../../stores/UserStore";

interface ILoginProps {
    UserStore?: UserStore
}

@inject(Stores.USER_STORE)
@observer
export class Login extends Component<ILoginProps> {

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

    login = async () => {
        window.location.href = `${SERVER_BASE_URL}${LOGIN_ROUTE}`;
    }
}

