import React, {Component} from 'react';
import {Collaborator} from './Collaborator'
import {ProjectStore} from "../../stores/ProjectStore";
import {inject, observer} from "mobx-react";
import {Stores} from "../../stores/Stores";
import {IUser} from "../../interfaces/entities/User";

interface ICollaboratorsListProps {
    projectId: number
    ProjectStore?: ProjectStore
}

@inject(Stores.PROJECT_STORE)
@observer
export class CollaboratorsList extends Component<ICollaboratorsListProps> {
    render() {
        return (
            <div>
                {this.props.ProjectStore?.project?.invitedUsers?.map((collaborator: IUser) =>
                    <Collaborator collaborator={collaborator} projectId={this.props.projectId}/>
                )}
            </div>
        )
    }

    async componentDidMount() {
        await this.props.ProjectStore?.find(this.props.projectId)
    }
}

