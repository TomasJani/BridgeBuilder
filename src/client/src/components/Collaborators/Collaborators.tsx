import React from 'react';
import {CollaboratorsList} from "./CollaboratorsList";
import {AddCollaboratorForm} from "./AddCollaboratorForm";
import {useParams,} from "react-router-dom";
import {TableMenu} from "../TableMenu";

export function Collaborators() {
    const {id} = useParams();
    return (
        <div className="container">
            <TableMenu headings={["Collaborator", "Kick"]}/>
            <CollaboratorsList projectId={id}/>
            <AddCollaboratorForm projectId={id}/>
        </div>
    )
}

export default Collaborators

