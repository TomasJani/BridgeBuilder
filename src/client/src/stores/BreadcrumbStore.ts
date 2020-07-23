import {observable} from "mobx";
import {IBreadcrumbItem} from "../interfaces/entities/BreadcrumbItem";

export class BreadcrumbStore {
    @observable
    projects: IBreadcrumbItem;

    @observable
    project: IBreadcrumbItem | undefined;

    @observable
    work: IBreadcrumbItem | undefined;


    constructor() {
        this.projects =  {
            "name": "Projects",
            "url": "/projects"
        }
        this.project = undefined;
        this.work = undefined;
    }
}