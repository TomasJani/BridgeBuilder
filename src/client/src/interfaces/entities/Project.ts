import {IUser} from "./User";
import {IWork} from "./Work";

export interface IProject {
    id: number;
    name: string;
    created: Date;
    owner: IUser;
    invitedUsers: IUser[];
    works: IWork[];
}