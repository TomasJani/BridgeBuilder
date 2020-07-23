import {action, observable} from "mobx";
import {IChange, IChangeCreate, IChangeEdit} from "../interfaces/entities/Change";
import {SERVER_BASE_URL} from "../constants";

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
        const response = await fetch(`${SERVER_BASE_URL}/changes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(change),
            credentials: "include"
        });
        const newChange: IChange = await response.json();
        this.changes.push(newChange);
    }

    @action
    editChange = async (change: IChangeEdit) => {
        await fetch(`${SERVER_BASE_URL}/changes/${change.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(change),
            credentials: "include"
        });
        const editChangeIndex = this.changes.findIndex(storeWork => storeWork.id === change.id);
        this.changes[editChangeIndex].name = change.name;
    }

    @action
    deleteChange = async (change: IChange) => {
        const removeIndex = this.changes.findIndex(storeChange => storeChange.id === change.id);
        this.changes.splice(removeIndex, 1);
        await fetch(`${SERVER_BASE_URL}/changes/${change.id}`, {
            method: 'DELETE',
            credentials: "include"
        });
    }

    @action
    loadWorkChanges = async (workId: number) => {
        const changesResponse = await fetch(`${SERVER_BASE_URL}/works/${workId}/changes`,{
            credentials: "include"
        });
        this.changes = await changesResponse.json();
        this.isLoading = false;
    }

    @action
    loadProjectChanges = async (changeId: number) => {
        const changesResponse = await fetch(`${SERVER_BASE_URL}/projects/${changeId}/changes`, {
            credentials: "include"
        });
        this.changes = await changesResponse.json();
        this.isLoading = false;
    }
}