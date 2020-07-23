import React from 'react';
import '../../styles/projects/project.css'
import {Link} from "react-router-dom";
import {IProject} from "../../interfaces/entities/Project";

interface IProjectProps {
    project: IProject;
}

export function Project(props: IProjectProps) {
    return (
        <div className="project-header">
            <ul className="project-header__items">
                <li className="project-header__item">
                    <Link className="project-header__link" to={`/projects/${props.project.id}/works`}>{props.project.name}</Link>
                </li>
                <li className="project-header__item">
                    <Link className="project-header__link" to="#">{props.project.owner.username}</Link>
                </li>
            </ul>
            <span className="project-header__link work-header__date">{props.project.created}</span>
        </div>
    )
}