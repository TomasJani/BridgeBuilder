import React, {Component} from 'react';
import {Project} from './Project';
import {inject, observer} from "mobx-react";
import {Stores} from "../../stores/Stores";
import {ProjectStore} from "../../stores/ProjectStore";
import {UserStore} from "../../stores/UserStore";

interface IProjectListProps {
    ProjectStore?: ProjectStore
    UserStore?: UserStore
}

@inject(Stores.PROJECT_STORE)
@inject(Stores.USER_STORE)
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
        await this.props.UserStore?.login();
        await this.props.ProjectStore?.loadProjects(this.props.UserStore?.user?.id!);
    }
}
