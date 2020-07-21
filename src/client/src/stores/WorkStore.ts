import {action, observable} from "mobx";
import {IWork, IWorkCreate, IWorkEditContent} from "../interfaces/entities/Work";

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
        const url = `http://localhost:5000/works`
        const worksResponse = await fetch(url, {credentials: "include"});
        let works: Array<IWork> = await worksResponse.json();
        this.work = works.find((work, _) => work.id === +workId);
        this.isLoading = true;
    }

    @action
    addWork = async (work: IWorkCreate) => {
        const response = await fetch("http://localhost:5000/works", {
            method: 'POST',
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
    editWork = async (work: IWorkEditContent) => {
        const response = await fetch(`http://localhost:5000/works/${work.id}`, {
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
        await fetch(`http://localhost:5000/works/${work.id}`, {
            method: 'DELETE',
            credentials: "include"
        });
    }

    @action
    loadWorks = async (projectId: number) => {
        const url = `http://localhost:5000/projects/${projectId}/works`
        const worksResponse = await fetch(url, {credentials: "include"});
        this.works = await worksResponse.json();
        this.isLoading = false;
    }
}