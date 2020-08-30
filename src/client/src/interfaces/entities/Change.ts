import { IUser } from "./User";
import { IWork } from "./Work";

export interface IChange {
    id: number;
    author: IUser;
    work: IWork;
    name: string;
    content: string;
    created: string;
}

export interface IChangeCreate {
    author: number;
    work: number;
    name: string;
    content: string;
    created: string;
}

export interface IChangeEdit {
    id: number;
    name: string;
}
