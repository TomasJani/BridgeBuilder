import React from 'react';
import {Project} from './Project';

const projects = [
    {
        id: 1,
        name: "Project 1",
        created: new Date().toUTCString(),
        owner: {
            username: "Michalis"
        }
    },

    {
        id: 2,
        name: "Project 2",
        owner: {
            username: "Tomasis"
        },
        created: new Date().toUTCString()
    }
]


export function ProjectsList() {
    return (
        <div>
            {projects.map(project => <Project key={project.id} {...project}/>)}
        </div>
    )
}
