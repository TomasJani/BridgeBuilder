import React from 'react';
import {CollaboratorsMenu} from "./CollaboratorsMenu";
import {CollaboratorsList} from "./CollaboratorsList";
import {AddCollaboratorForm} from "./AddCollaboratorForm";
import {useParams,} from "react-router-dom";

export function Collaborators() {
    const {id} = useParams();
    return (
        <div className="container">
            <CollaboratorsMenu/>
            <CollaboratorsList projectId={id}/>
            <AddCollaboratorForm projectId={id}/>
        </div>
    )
}

