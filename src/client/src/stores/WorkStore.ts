import {action, observable} from "mobx";
import {IWork, IWorkCreate, IWorkEditContent} from "../interfaces/entities/Work";
import {SERVER_BASE_URL} from "../constants";

export class WorkStore {
    @observable
    works: Array<IWork>;

    @observable
    work: IWork | undefined;

    @observable
    isLoading: boolean;

    constructor(fixtures: IWork[]) {
        this.works = fixtures;
        this.work = undefined;
        this.isLoading = true;
    }

    @action
    find = async (workId: number) => {
        const url = `${SERVER_BASE_URL}/works/${workId}`;
        const worksResponse = await fetch(url, {credentials: "include"});
        this.work = worksResponse.status === 401 ? undefined : await worksResponse.json()
        this.isLoading = true;
    }

    @action
    addWork = async (work: IWorkCreate) => {
        const response = await fetch(`${SERVER_BASE_URL}/works`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(work),
            credentials: "include"
        });
        const newWork: IWork = await response.json();
        let author = await fetch(`${SERVER_BASE_URL}/works/${newWork.id}/author`, {credentials: "include"});
        newWork.author = await author.json();
        this.works.push(newWork);
    }

    @action
    editWork = async (work: IWorkEditContent) => {
        const response = await fetch(`${SERVER_BASE_URL}/works/${work.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(work),
            credentials: "include"
        });
        const newWork: IWork = await response.json();
        this.works.push(newWork);
    }

    @action
    deleteWork = async (work: IWork) => {
        const removeIndex = this.works.findIndex(storeWork => storeWork.id === work.id);
        this.works.splice(removeIndex, 1);
        await fetch(`${SERVER_BASE_URL}/works/${work.id}`, {
            method: 'DELETE',
            credentials: "include"
        });
    }

    @action
    loadWorks = async (projectId: number) => {
        const url = `${SERVER_BASE_URL}/projects/${projectId}/works`
        const worksResponse = await fetch(url, {credentials: "include"});
        this.works = worksResponse.status === 401 ? undefined : await worksResponse.json()
        this.isLoading = false;
    }
}
