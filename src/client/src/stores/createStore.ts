import { ProjectStore } from "./ProjectStore";
import { IProject } from "../interfaces/entities/Project";

export function createStore(initialProjects: IProject[] = []) {
    const projectStore = new ProjectStore(initialProjects);

    return {
        "ProjectStore": projectStore
    }

}