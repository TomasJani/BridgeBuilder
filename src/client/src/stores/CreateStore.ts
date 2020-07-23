import { ProjectStore } from "./ProjectStore";
import { IProject } from "../interfaces/entities/Project";
import { ChangeStore } from "./ChangeStore";
import { IChange } from "../interfaces/entities/Change";
import { WorkStore } from "./WorkStore";
import { IWork } from "../interfaces/entities/Work";
import { Stores } from "./Stores";
import {UserStore} from "./UserStore";
import {BreadcrumbStore} from "./BreadcrumbStore";

export function createStores(initialProjects: IProject[] = [], initialChanges: IChange[] = [], initialWork: IWork[] = []) {
    const projectStore = new ProjectStore(initialProjects);
    const changeStore = new ChangeStore(initialChanges);
    const workStore = new WorkStore(initialWork);
    const userStore = new UserStore();
    const breadcrumbStore = new BreadcrumbStore();

    return {
        [Stores.PROJECT_STORE]: projectStore,
        [Stores.CHANGE_STORE]: changeStore,
        [Stores.WORK_STORE]: workStore,
        [Stores.USER_STORE]: userStore,
        [Stores.BREADCRUMB_STORE]: breadcrumbStore
    }

}