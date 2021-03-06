import {action, observable} from "mobx";
import {IChange, IChangeCreate, IChangeEdit} from "../interfaces/entities/Change";
import {SERVER_BASE_URL} from "../constants";

export class ChangeStore {
    @observable
    changes: Array<IChange>;

    @observable
    change?: IChange;

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
        await this.loadChanges(change.work)
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
        await this.loadChanges(change.workId)
        await this.find(change.id)
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
    loadChanges = async (workId: number) => {
        const changesResponse = await fetch(`${SERVER_BASE_URL}/works/${workId}/changes`, {
            credentials: "include"
        });
        this.changes = await changesResponse.json();
        this.isLoading = false;
    }

    @action
    find = async (changeId: number) => {
        const url = `${SERVER_BASE_URL}/changes/${changeId}`;
        const changesResponse = await fetch(url, {credentials: "include"});
        this.change = await changesResponse.json()
        this.isLoading = true;
    }
}
