import {Project} from "./Project";
import {Work} from "./Work";
import {Change} from "./Change";

export interface User {
    id: number;
    username: string;
    image: string;
    created: Date;
    ownProjects: Project[];
    invitedToProjects: Project[];
    works: Work[]
    changes: Change[]
}