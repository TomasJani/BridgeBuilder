import {IUser} from "./User";
import {IWork} from "./Work";

export interface IProject {
    id: number;
    name: string;
    created: string;
    owner: IUser;
    invitedUsers: IUser[];
    works: IWork[];
}

export interface IProjectCreate {
    name: string;
    created: string;
    owner: number;
}