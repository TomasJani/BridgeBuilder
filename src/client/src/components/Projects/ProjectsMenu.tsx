import React from 'react';
import '../../styles/projects/projects-menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

interface IProjectsMenuProps {
    projectId: number;
}

export function ProjectsMenu() {
    return (
        <div className="projects-menu">
            <ul className="projects-menu__items">
                <li className="projects-menu__item">
                    <a className="projects-menu__link" href="#">Project</a>
                </li>
                <li className="projects-menu__item">
                    <a className="projects-menu__link" href="#">User</a>
                </li>
            </ul>
            <a href="#" className="projects-menu__item projects-menu__settings">
                <FontAwesomeIcon icon={faEllipsisV} />
            </a>
        </div>
    )
}