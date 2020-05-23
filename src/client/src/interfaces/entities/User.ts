import {IProject} from "./Project";
import {IWork} from "./Work";
import {IChange} from "./Change";

export interface IUser {
    id: number;
    googleId: number;
    works: IWork[];
    changes: IChange[];
    username: string;
    image: string;
    created: string;
    ownProjects: IProject[];
    invitedToProjects: IProject[];
}