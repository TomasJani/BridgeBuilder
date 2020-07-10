import {observable, action} from "mobx";
import {IProject} from "../interfaces/entities/Project";

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
    addProject = async (project: IProject) => {
        this.projects.push(project);
        const response = await fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project),
            credentials: "include"
        });
    }

    @action
    editProject = async (project: IProject) => {
        this.projects.push(project);
        const response = await fetch(`http://localhost:5000/projects/${project.id}`, {
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
        const response = await fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'DELETE',
            credentials: "include"
        });
    }

    @action
    loadProjects = async (userId: number) => {
        const url = `http://localhost:5000/users/${userId}/relatedProjects`;
        const projectsResponse = await fetch(url, {credentials: 'include'});
        const projects = await projectsResponse.json();
        console.log(projectsResponse);
        console.log(projects);
        this.projects = projects;
        this.isLoading = false;
    }
}