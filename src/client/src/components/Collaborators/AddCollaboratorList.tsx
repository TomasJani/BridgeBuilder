import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Stores} from "../../stores/Stores";
import {UserStore} from "../../stores/UserStore";
import {CollaboratorToAdd} from "./CollaboratorToAdd";
import {IUser} from "../../interfaces/entities/User";

interface IAddCollaboratorsListProps {
    projectId: number
    username: string
    UserStore?: UserStore
}

@inject(Stores.USER_STORE)
@observer
export class AddCollaboratorList extends Component<IAddCollaboratorsListProps> {
    render() {
        const usersToInviteQuery = {username: this.props.username, projectId: this.props.projectId};
        const users = this.props.UserStore?.usersToInvite(usersToInviteQuery);
        return (
            <div>
                {users!.map((user: IUser) =>
                    <CollaboratorToAdd key={user.id} collaborator={user}
                                       projectId={this.props.projectId}/>)}
            </div>
        )
    }

    componentDidMount = async () => {
        await this.props.UserStore?.login();
        await this.props.UserStore?.loadUsers();
    }
}

