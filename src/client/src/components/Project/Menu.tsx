import React from 'react';
import '../../styles/project/project-menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

interface IProjectMenuProps {
    projectId: number;
}

export function ProjectMenu() {
    return (
        <div className="project-menu">
            <ul className="project-menu__items">
                <li className="project-menu__item">
                    <a className="project-menu__link" href="#">Work</a>
                </li>
                <li className="project-menu__item">
                    <a className="project-menu__link" href="#">Changes</a>
                </li>
            </ul>
            <a href="#" className="project-menu__item project-menu__settings"><FontAwesomeIcon icon={faEllipsisV} /></a>
        </div>
    )
}