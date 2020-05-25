import React, { Component } from 'react';
import WorkItem from './WorkItem';
import { inject, observer } from 'mobx-react';
import { Stores } from '../../stores/Stores';
import { WorkStore } from '../../stores/WorkStore';

interface IProjectWorksProps {
    WorkStore?: WorkStore
}

@inject(Stores.WORK_STORE)
@observer
export class ProjectWorks extends Component<IProjectWorksProps> {
    render() {
        return (
            <div>
                {this.processWorks()}
            </div>
        )
    }

    async componentDidMount() {
        this.props.WorkStore!.loadWorks(1);
    }

    processWorks() {
        return this.props.WorkStore?.works.map(work => {
            return <WorkItem id={work.id} name={work.name} author={work.author} created={work.created} />
        })
    }
}
