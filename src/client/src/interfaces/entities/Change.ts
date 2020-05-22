import {IUser} from "./User";
import {IWork} from "./Work";
import {IProject} from "./Project";

export interface IChange {
    id: number;
    author: IUser;
    work: IWork;
    project: IProject;
    name: string;
    content: string;
    created: string;
}