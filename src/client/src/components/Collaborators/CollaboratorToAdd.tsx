import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

import '../../styles/collaborators/collaborator-to-add.css'
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
export class CollaboratorToAdd extends Component<ICollaboratorProps> {
    render() {
        const items = [
            <RouterLink to={"#"} content={<>{this.props.collaborator.username}</>}/>,
            <RegularLink onClick={this.inviteUser} content={<FontAwesomeIcon icon={faPlus}/>}/>
        ]
        return (
            <TableRow items={items}/>
        )
    }

    inviteUser = async (e: any) => {
        e.preventDefault()
        await this.props.ProjectStore?.inviteUser(this.props.projectId, this.props.collaborator.id)
        await this.props.UserStore?.loadUsers()
    }
}
