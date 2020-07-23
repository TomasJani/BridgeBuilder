import {action, observable} from "mobx";
import {IUser} from "../interfaces/entities/User";
import {SERVER_BASE_URL} from "../constants";

export class UserStore {
    @observable
    user: IUser | undefined;

    constructor() {
        this.user = undefined;
    }

    @action
    login = async () => {
        const url = `${SERVER_BASE_URL}/auth/getUser`;
        const response = await fetch(url, {credentials: "include"});
        this.user = await response.json();
    }
}