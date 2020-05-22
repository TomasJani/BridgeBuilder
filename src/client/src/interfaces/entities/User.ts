import {IProject} from "./Project";
import {IWork} from "./Work";
import {IChange} from "./Change";

export interface IUser {
    id: number;
    username: string;
    image: string;
    created: Date;
    ownProjects: IProject[];
    invitedToProjects: IProject[];
    works: IWork[]
    changes: IChange[]
}