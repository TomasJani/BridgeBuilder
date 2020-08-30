import {action, computed, observable} from "mobx";
import {IProject, IProjectCreate} from "../interfaces/entities/Project";
import {SERVER_BASE_URL} from "../constants";

export class ProjectStore {
    @observable
    projects: Array<IProject>;

    @observable
    project?: IProject;

    @observable
    isLoading: boolean;

    constructor(fixtures: IProject[]) {
        this.projects = fixtures;
        this.isLoading = true;
    }

    @action
    addProject = async (project: IProjectCreate) => {
        const response = await fetch(`${SERVER_BASE_URL}/projects`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project),
            credentials: "include"
        });
        const newProject: IProject = await response.json();
        let author = await fetch(`${SERVER_BASE_URL}/projects/${newProject.id}/owner`, {credentials: "include"});
        newProject.owner = await author.json();
        this.projects.push(newProject);
    }

    @action
    editProject = async (project: IProject) => {
        this.projects.push(project);
        await fetch(`${SERVER_BASE_URL}/projects/${project.id}`, {
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
        await fetch(`${SERVER_BASE_URL}/projects/${project.id}`, {
            method: 'DELETE',
            credentials: "include"
        });
    }

    @action
    loadProjects = async (userId: number) => {
        const url = `${SERVER_BASE_URL}/users/${userId}/relatedProjects`;
        const projectsResponse = await fetch(url, {credentials: 'include'});
        this.projects = await projectsResponse.json();
        this.isLoading = false;
    }

    @action
    find = async (projectId: number) => {
        const url = `${SERVER_BASE_URL}/projects/${projectId}`;
        const projectsResponse = await fetch(url, {credentials: "include"});
        this.project = await projectsResponse.json();
        this.isLoading = true;
    }

    inviteUser = async (projectId: number, userId: number) => {
        const url = `${SERVER_BASE_URL}/projects/${projectId}/invitedUsers/${userId}`;
        await fetch(url, {credentials: "include", method: "POST"});
        await this.loadProjects(userId)
        await this.find(projectId)
    }

    kickCollaborator = async (projectId: number, userId: number) => {
        const url = `${SERVER_BASE_URL}/projects/${projectId}/invitedUsers/kick/${userId}`;
        await fetch(url, {credentials: "include", method: "POST"});
    }
}
