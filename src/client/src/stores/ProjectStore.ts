import {action, observable} from "mobx";
import {IProject, IProjectCreate} from "../interfaces/entities/Project";

export class ProjectStore {
    @observable
    projects: Array<IProject>;

    @observable
    isLoading: boolean;

    constructor(fixtures: IProject[]) {
        this.projects = fixtures;
        this.isLoading = true;
    }

    @action
    addProject = async (project: IProjectCreate) => {
        const response = await fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project),
            credentials: "include"
        });
        const newProject: IProject = await response.json();
        this.projects.push(newProject);
    }

    @action
    editProject = async (project: IProject) => {
        this.projects.push(project);
        await fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project),
            credentials: "include"
        });
    }

    @action
    deleteProject = async (project: IProject) => {
        const removeIndex = this.projects.findIndex(storeProject => storeProject.id === project.id);
        this.projects.splice(removeIndex, 1);
        await fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'DELETE',
            credentials: "include"
        });
    }

    @action
    loadProjects = async (userId: number) => {
        this.isLoading = true;
        const url = `http://localhost:5000/users/${userId}/relatedProjects`;
        const projectsResponse = await fetch(url, {credentials: 'include'});
        let projects = await projectsResponse.json();
        this.projects = projects;
        console.log(projects);
        this.isLoading = false;
    }
}