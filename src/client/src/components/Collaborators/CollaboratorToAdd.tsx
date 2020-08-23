import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

import '../../styles/collaborators/collaborator-to-add.css'
import {IUser} from "../../interfaces/entities/User";
import {inject, observer} from "mobx-react";
import {Stores} from "../../stores/Stores";
import {ProjectStore} from "../../stores/ProjectStore";
import {UserStore} from "../../stores/UserStore";

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
        return (
            <div className="collaborator-to-add-header">
                <ul className="collaborator-to-add-header__items">
                    <li className="collaborator-to-add-header__item">
                        <Link className="collaborator-to-add-header__link" to={`#`}>
                            {this.props.collaborator.username}
                        </Link>
                    </li>
                    <li className="collaborator-to-add-header__item">
                        <a className="collaborator-to-add-header__link collaborator-to-add-header__kick"
                           onClick={this.inviteUser}><FontAwesomeIcon
                            icon={faPlus}/></a>
                    </li>
                </ul>
            </div>
        )
    }

    inviteUser = async (e: any) => {
        e.preventDefault()
        await this.props.ProjectStore?.inviteUser(this.props.projectId, this.props.collaborator.id)
        await this.props.UserStore?.loadUsers()
    }
}
