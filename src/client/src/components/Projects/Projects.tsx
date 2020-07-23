import React from 'react';
import {Breadcrumb} from "../Breadcrumb";
import {ProjectsMenu} from "./ProjectsMenu";
import {ProjectsList} from "./ProjectsList";
import {AddProjectForm} from "./AddProjectForm";

export function Projects() {
    return (
        <div className="container">
            <Breadcrumb/>
            <ProjectsMenu />
            <ProjectsList />
            <AddProjectForm />
        </div>
    )
}