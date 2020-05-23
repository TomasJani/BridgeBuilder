import React from 'react';
import '../../styles/projects/project.css'

interface IDummyUser {
    username: string
}


interface IProjectProps {
    id: number;
    name: string;
    created: string;
    owner: IDummyUser;
}

export function Project(props: IProjectProps) {
    return (
        <div className="project-header">
            <ul className="project-header__items">
                <li className="project-header__item">
                    <a className="project-header__link" href="#">{props.name}</a>
                </li>
                <li className="project-header__item">
                    <a className="project-header__link" href="#">{props.owner.username}</a>
                </li>
            </ul>
            <span className="project-header__link work-header__date">{props.created}</span>
        </div>
    )
}