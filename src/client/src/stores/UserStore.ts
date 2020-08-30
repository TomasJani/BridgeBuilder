import {action, observable} from "mobx";
import {createTransformer} from "mobx-utils"
import {IUser} from "../interfaces/entities/User";
import {SERVER_BASE_URL} from "../constants";

export interface IUsersToInviteQuery {
    username: string,
    projectId: number
}

export class UserStore {
    @observable
    users: IUser[];

    @observable
    user: IUser | undefined;

    @observable
    isLoading: boolean

    constructor(fixtures: IUser[]) {
        this.users = fixtures;
        this.user = undefined;
        this.isLoading = false;
    }

    @action
    login = async () => {
        this.isLoading = true;
        const url = `${SERVER_BASE_URL}/auth/getUser`;
        const response = await fetch(url, {credentials: "include"});
        this.user = response.status === 403 ? undefined : await response.json();
        this.isLoading = false;
    }

    @action
    loadUsers = async () => {
        this.isLoading = true;
        const url = `${SERVER_BASE_URL}/users`
        const usersResponse = await fetch(url, {credentials: "include"});
        this.users = await usersResponse.json();
        this.isLoading = false;
    }

    // used `createTransformer` instead of `@computed` because `@computed` functions can't have arguments
    // transformer can have only one argument so object is used as a way to pass multiple args
    usersToInvite = createTransformer((query: IUsersToInviteQuery) =>
        this.users.filter(
            user =>
                user.username.includes(query.username) &&
                user.invitedToProjects.find(project => project.id.toString() === query.projectId.toString()) === undefined &&
                user.ownProjects.find(project => project.id.toString() === query.projectId.toString()) === undefined
        )
    );
}
