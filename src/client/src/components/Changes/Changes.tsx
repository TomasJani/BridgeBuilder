import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {Stores} from '../../stores/Stores';
import {ChangeStore} from '../../stores/ChangeStore';
import {Change} from './Change';

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
            <div>
                <hr/>
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
            return <Change change={change} />
        })
    }
}
