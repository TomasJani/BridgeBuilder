import {IUser} from "./User";
import {IProject} from "./Project";
import {IChange} from "./Change";

export interface IWork {
    id: number;
    author: IUser;
    project: IProject;
    changes: IChange[];
    name: string;
    content: string;
    created: string;
}