import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus} from "@fortawesome/free-solid-svg-icons";

import '../../styles/collaborators/collaborator.css'
import {IUser} from "../../interfaces/entities/User";
import {inject, observer} from "mobx-react";
import {Stores} from "../../stores/Stores";
import {ProjectStore} from "../../stores/ProjectStore";
import {UserStore} from "../../stores/UserStore";
import {RegularLink, RouterLink, TableRow} from "../TableRow";

interface ICollaboratorProps {
    collaborator: IUser
    ProjectStore?: ProjectStore
    UserStore?: UserStore
    projectId: number
}

@inject(Stores.PROJECT_STORE)
@inject(Stores.USER_STORE)
@observer
export class Collaborator extends Component<ICollaboratorProps> {
    render() {
        const items = [
            <RouterLink to={"#"} content={<>{this.props.collaborator.username}</>}/>,
            <RegularLink onClick={this.kickCollaborator} content={<FontAwesomeIcon icon={faMinus}/>}/>
        ]
        return (
            <TableRow items={items}/>
        )
    }

    kickCollaborator = async (e: any) => {
        e.preventDefault()
        await this.props.ProjectStore?.kickCollaborator(this.props.projectId, this.props.collaborator.id)
        await this.props.ProjectStore?.loadProjects(this.props.UserStore?.user?.id!)
        await this.props.ProjectStore?.find(this.props.projectId)
        await this.props.UserStore?.loadUsers()
    }
}
