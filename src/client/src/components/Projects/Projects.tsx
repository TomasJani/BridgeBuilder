import React from 'react';
import {ProjectsMenu} from "./ProjectsMenu";
import {ProjectsList} from "./ProjectsList";
import {AddProjectForm} from "./AddProjectForm";

export function Projects() {
    return (
        <div className="container">
            <ProjectsMenu />
            <ProjectsList />
            <AddProjectForm />
        </div>
    )
}