import React, {Component} from 'react';
import '../../styles/projects/project-form.css'
import {inject, observer} from "mobx-react";
import {Stores} from "../../stores/Stores";
import {ProjectStore} from "../../stores/ProjectStore";
import {IProjectCreate} from "../../interfaces/entities/Project";
import {UserStore} from "../../stores/UserStore";

interface IAddProjectFormProps {
    ProjectStore?: ProjectStore,
    UserStore?: UserStore
}

interface IAddProjectFormState {
    name: string;
}

@inject(Stores.PROJECT_STORE)
@inject(Stores.USER_STORE)
@observer
export class AddProjectForm extends Component<IAddProjectFormProps, IAddProjectFormState> {
    constructor(props: IAddProjectFormProps) {
        super(props);
        this.state = {
            name: ""
        }
    }

    render() {
        return (
            <form className="project-form" onSubmit={this.handleSubmit}>
                <input className="project-form__input" value={this.state.name} onChange={this.handleChange}
                       placeholder="Project name" type="text"/>
                <button type="submit" className="project-form__link">Add Project</button>
            </form>
        )
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            name: e.target.value
        })
    }

    handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (this.state.name === '') {
            return
        }

        const newProject: IProjectCreate = {
            name: this.state.name,
            created: (new Date()).toUTCString(),
            owner: this.props.UserStore?.user!.id!
        }

        this.setState({
            ...this.state,
            name: ''
        })
        await this.props.ProjectStore?.addProject(newProject);
    }
}