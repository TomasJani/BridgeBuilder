import React, {Component} from 'react';
import {Project} from './Project';
import {inject, observer} from "mobx-react";
import {Stores} from "../../stores/Stores";
import {ProjectStore} from "../../stores/ProjectStore";

interface IProjectListProps {
    ProjectStore?: ProjectStore
}

@inject(Stores.PROJECT_STORE)
@observer
export class ProjectsList extends Component<IProjectListProps> {
    render() {
        return (
            <div>
                {this.props.ProjectStore?.projects.map(project =>
                    <Project project={project}/>
                    )
                }
            </div>
        )
    }

    async componentDidMount() {
        await this.props.ProjectStore!.loadProjects(1);
    }
}
