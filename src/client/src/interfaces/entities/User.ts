import {Project} from "./Project";
import {Work} from "./Work";
import {Change} from "./Change";

export interface User {
    id: number;
    username: string;
    image: string;
    created: Date;
    own_projects: Project[];
    invited_to_projects: Project[];
    works: Work[]
    changes: Change[]
}