import React, { Component } from 'react';
import '../../styles/work-edit/work-form.css'
import { WorkStore } from '../../stores/WorkStore';
import { IWorkCreate } from '../../interfaces/entities/Work';
import { inject, observer } from 'mobx-react';
import { Stores } from '../../stores/Stores';

interface IAddWorkFormProps {
    WorkStore?: WorkStore;
    id: number
}

interface IAddWorkFormState {
    name: string;
}

@inject(Stores.WORK_STORE)
@observer
export class AddWorkForm extends Component<IAddWorkFormProps, IAddWorkFormState> {
    constructor(props: IAddWorkFormProps) {
        super(props);
        this.state = {
            name: ""
        }
    }

    render() {
        return (
            <form className="work-form" onSubmit={this.handleSubmit}>
                <input className="work-form__input" value={this.state.name} onChange={this.handleChange} placeholder="Work name" type="text" />
                <button type="submit" className="work-form__link">Add Work</button>
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

        const newWork: IWorkCreate = {
            project: this.props.id,
            name: this.state.name,
            content: "",
            author: 1,
            created: (new Date()).toUTCString(),
        }

        this.setState({
            ...this.state,
            name: ''
        })
        await this.props.WorkStore!.addWork(newWork);
    }
}
