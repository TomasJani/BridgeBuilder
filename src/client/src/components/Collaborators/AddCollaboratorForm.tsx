import React, {Component} from 'react';
import '../../styles/collaborators/collaborator-form.css'
import {AddCollaboratorMenu} from "./AddCollaboratorsMenu";
import {AddCollaboratorList} from "./AddCollaboratorList";

interface IAddCollaboratorFormProps {
    projectId: number
}

interface IAddCollaboratorFormState {
    username: string;
}

export class AddCollaboratorForm extends Component<IAddCollaboratorFormProps, IAddCollaboratorFormState> {
    constructor(props: IAddCollaboratorFormProps) {
        super(props);
        this.state = {
            username: ""
        }
    }

    render() {
        return (
            <>
                <AddCollaboratorMenu/>
                <AddCollaboratorList projectId={this.props.projectId} username={this.state.username}/>
                <form className="collaborator-form">
                    <input className="collaborator-form__input" value={this.state.username} onChange={this.handleChange}
                           placeholder="Collaborator name" type="text"/>
                </form>
            </>
        )
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            username: e.target.value
        })
    }
}
