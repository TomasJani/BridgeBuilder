import {User} from "./User";
import {Work} from "./Work";

export interface Project {
    id: number;
    name: string;
    created: Date;
    owner: User;
    invitedUsers: User[];
    works: Work[];
}