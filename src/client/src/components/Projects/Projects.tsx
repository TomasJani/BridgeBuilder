import React from 'react';
import {Breadcrumb} from "../Breadcrumb";
import {ProjectsMenu} from "./ProjectsMenu";
import {ProjectsList} from "./ProjectsList";
import {AddProjectForm} from "./AddProjectForm";


const breadcrumbItems = [
    {
        name: "Projects",
        url: "/projects"
    }
]

export function Projects() {
    return (
        <div className="container">
            <Breadcrumb items={breadcrumbItems} />
            <ProjectsMenu />
            <ProjectsList />
            <AddProjectForm />
        </div>
    )
}