import { observable, action } from "mobx";
import { IChange, IChangeEdit, IChangeCreate } from "../interfaces/entities/Change";

export class ChangeStore {
    @observable
    changes: Array<IChange>;

    @observable
    isLoading: boolean;

    constructor(fixtures: IChange[]) {
        this.changes = fixtures;
        this.isLoading = true;
    }

    @action
    addChange = async (change: IChangeCreate) => {
        const response = await fetch("http://localhost:5000/changes", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(change)
        });
        const newWork: IChange = await response.json();
        this.changes.push(newWork);
    }

    @action
    editChange = async (change: IChangeEdit) => {
        const response = await fetch(`http://localhost:5000/changes/${change.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(change)
        });
        const editChangeIndex = this.changes.findIndex(storeWork => storeWork.id === change.id);
        this.changes[editChangeIndex].name = change.name;
    }

    @action
    deleteChange = async (change: IChange) => {
        const removeIndex = this.changes.findIndex(storeChange => storeChange.id === change.id);
        this.changes.splice(removeIndex, 1);
        const response = await fetch(`http://localhost:5000/changes/${change.id}`, {
            method: 'DELETE'
        });
    }

    @action
    loadWorkChanges = async (workId: number) => {
        const changesResponse = await fetch(`http://localhost:5000/works/${workId}/changes`);
        const changes = await changesResponse.json();
        this.changes = changes;
        this.isLoading = false;
    }

    @action
    loadProjectChanges = async (changeId: number) => {
        const changesResponse = await fetch(`http://localhost:5000/projects/${changeId}/changes`);
        const changes = await changesResponse.json();
        this.changes = changes;
        this.isLoading = false;
    }
}