import {IUser} from "./User";
import {IWork} from "./Work";
import {IChange} from "./Change";

export interface IProject {
    id: number;
    name: string;
    created: string;
    owner: IUser;
    invitedUsers: IUser[];
    works: IWork[];
    changes: IChange[];
}