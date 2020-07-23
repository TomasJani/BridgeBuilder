import { IUser } from "./User";
import { IProject } from "./Project";
import { IChange } from "./Change";

export interface IWork {
    newWork: Response;
    id: number;
    author: IUser;
    project: IProject;
    changes: IChange[];
    name: string;
    content: string;
    created: string;
}

export interface IWorkCreate {
    author: number;
    project: number;
    name: string;
    content: string;
    created: string;
}

export interface IWorkEditContent {
    id: number;
    content: string;
}