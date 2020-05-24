///<reference path= "../../../node_modules/react-froala-wysiwyg/lib/index.d.ts" />

import React, { Component } from 'react';
import '../../styles/work-edit/work-form.css'
import { WorkStore } from '../../stores/WorkStore';
import { inject, observer } from 'mobx-react';
import { Stores } from '../../stores/Stores';
import { IWorkEditContent } from '../../interfaces/entities/Work';
import { IChangeCreate } from '../../interfaces/entities/Change';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditor from 'react-froala-wysiwyg';
import { ChangeStore } from '../../stores/ChangeStore';

interface IFormProps {
    workId: number;
    WorkStore?: WorkStore;
    ChangeStore?: ChangeStore;
}

interface IFormState {
    name: string;
    model: string;
}

@inject(Stores.WORK_STORE)
@inject(Stores.CHANGE_STORE)
@observer
export class Form extends Component<IFormProps, IFormState> {
    constructor(props: IFormProps) {
        super(props);
        this.state = {
            name: "",
            model: "Example Text"
        }
    }

    render() {
        return (
            <div>
                <div className="work-editor">
                    <FroalaEditor
                        tag='textarea'
                        model={this.state.model}
                        onModelChange={this.handleFroala}
                    />
                </div>
                <form onSubmit={this.handleSubmit} className="work-form">
                    <input className="work-form__input" onChange={this.handleChange} placeholder="Change message" type="text" name="" id="" />
                    <button className="work-form__link" type="submit">Change</button>
                </form>
            </div>
        )
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            name: e.target.value
        })
    }

    handleFroala = (model: any) => {
        this.setState({
            ...this.state,
            model: model
        })
    }

    handleSubmit = async (e: React.FormEvent) => {
        if (this.state.name === '') {
            return
        }

        const editWork: IWorkEditContent = {
            id: this.props.workId,
            content: this.state.model,
        }

        const createChange: IChangeCreate = {
            work: this.props.workId,
            author: 1,
            name: this.state.name,
            created: (new Date()).toUTCString(),
            content: this.state.model,
        }

        console.log(editWork);

        this.setState({
            ...this.state,
            name: ''
        })

        this.props.WorkStore!.editWork(editWork);
        this.props.ChangeStore!.addChange(createChange);
        e.preventDefault();
    }
}