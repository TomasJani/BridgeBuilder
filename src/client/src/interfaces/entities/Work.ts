import {User} from "./User";
import {Project} from "./Project";
import {Change} from "./Change";

export interface Work {
    id: number;
    author: User;
    project: Project;
    changes: Change[];
    name: string;
    content: string;
    created: string;
}