import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

import '../../styles/collaborators/collaborator.css'
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
export class Collaborator extends Component<ICollaboratorProps> {
    render() {
        return (
            <div className="collaborator-header">
                <ul className="collaborator-header__items">
                    <li className="collaborator-header__item">
                        <Link className="collaborator-header__link" to={`#`}>{this.props.collaborator.username}</Link>
                    </li>
                    <li className="collaborator-header__item">
                        <a className="collaborator-header__link collaborator-header__kick"
                           onClick={this.kickCollaborator}><FontAwesomeIcon
                            icon={faMinus}/></a>
                    </li>
                </ul>
            </div>
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
