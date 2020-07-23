import React, {Component} from 'react';
import WorkItem from './WorkItem';
import {inject, observer} from 'mobx-react';
import {Stores} from '../../stores/Stores';
import {WorkStore} from '../../stores/WorkStore';

interface IProjectWorksProps {
    id: number
    WorkStore?: WorkStore
}

@inject(Stores.WORK_STORE)
@observer
export class ProjectWorks extends Component<IProjectWorksProps> {
    render() {
        if (this.props.WorkStore?.isLoading) {
            return <p>Loading ...</p>
        }
        return (
            <div>
                {this.processWorks()}
            </div>
        )
    }

    async componentDidMount() {
        await this.props.WorkStore?.loadWorks(this.props.id);
    }

    processWorks() {
        return this.props.WorkStore?.works.map(work => {
            return <WorkItem work={work}/>
        })
    }
}
