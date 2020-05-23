import React from 'react';
import '../../styles/projects/project-form.css'


export function AddProjectForm() {
    return (
        <form className="project-form">
            <input className="project-form__input" placeholder="Project name" type="text" name="" id=""/>
            <a className="project-form__link" type="form" href="">Add Project</a>
        </form>
    )
}