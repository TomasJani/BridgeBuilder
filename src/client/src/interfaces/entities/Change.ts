import {User} from "./User";
import {Work} from "./Work";
import {Project} from "./Project";

export interface Change {
    id: number;
    author: User;
    work: Work;
    project: Project;
    name: string;
    content: string;
    created: string;
}