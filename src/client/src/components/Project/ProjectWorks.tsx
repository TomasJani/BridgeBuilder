import React, { Component } from 'react';
import { ProjectMenu } from './Menu';
import WorkItem from './WorkItem';

export class ProjectWorks extends Component {
    render() {
        return (
            <div>
                <WorkItem id={1} name="work" created="25.2.2420" />
            </div>
        )
    }
}
