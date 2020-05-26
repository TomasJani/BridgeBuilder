import React, { Component } from 'react';
import { Breadcrumb } from '../Breadcrumb';
import { inject, observer } from 'mobx-react';
import { Stores } from '../../stores/Stores';
import { ChangeStore } from '../../stores/ChangeStore';
import { Change } from './Change';

const breadcrumbItems = [
    {
        name: "Javascript",
        url: "javscript.com"
    },
    {
        name: "Visual Studio Code",
        url: "javscript.com/viusal-studio-code"
    }
]

interface IChangesProps {
    projectId?: number;
    workId?: number;
    ChangeStore?: ChangeStore;
}

@inject(Stores.CHANGE_STORE)
@observer
export class Changes extends Component<IChangesProps> {
    render() {
        return (
            <div className="container">
                <Breadcrumb items={breadcrumbItems} />
                {this.processChanges()}
            </div>
        )
    }

    async componentDidMount() {
        if (this.props.projectId !== undefined) {
            await this.props.ChangeStore!.loadProjectChanges(this.props.projectId);
        }
        if (this.props.workId !== undefined) {
            await this.props.ChangeStore!.loadWorkChanges(this.props.workId);
        }
    }

    processChanges() {
        return this.props.ChangeStore?.changes.map(change => {
            return <Change id={change.id} name={change.name} author={change.author} created={change.created} />
        })
    }
}
