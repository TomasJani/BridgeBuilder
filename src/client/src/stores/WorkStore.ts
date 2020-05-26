import { observable, action } from "mobx";
import { IWork, IWorkCreate, IWorkEditContent } from "../interfaces/entities/Work";

export class WorkStore {
    @observable
    works: Array<IWork>;

    @observable
    isLoading: boolean;

    constructor(fixtures: IWork[]) {
        this.works = fixtures;
        this.isLoading = true;
    }

    @action
    addWork = async (work: IWorkCreate) => {
        const response = await fetch("http://localhost:5000/works", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(work)
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
            body: JSON.stringify(work)
        });
        const newWork: IWork = await response.json();
        this.works.push(newWork);
        console.log("");
    }

    @action
    deleteWork = async (work: IWork) => {
        const removeIndex = this.works.findIndex(storeWork => storeWork.id === work.id);
        this.works.splice(removeIndex, 1);
        const response = await fetch(`http://localhost:5000/works/${work.id}`, {
            method: 'DELETE'
        });
    }

    @action
    loadWorks = async (projectId: number) => {
        const worksResponse = await fetch(`http://localhost:5000/projects/${projectId}/works`);
        const works = await worksResponse.json();
        this.works = works;
        this.isLoading = false;
    }
}