import React from 'react';
import '../../styles/project/project-menu.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import {Link, useRouteMatch} from "react-router-dom";

interface IProjectMenuProps {
    projectId: number;
}

export function ProjectMenu() {
    let {url} = useRouteMatch();

    return (
        <div className="project-menu">
            <ul className="project-menu__items">
                <li className="project-menu__item">
                    <Link className="project-menu__link" to={`${url}/works`}>Work</Link>
                </li>
                <li className="project-menu__item">
                    <Link className="project-menu__link" to={`${url}/changes`}>Changes</Link>
                </li>
            </ul>
            <Link to="#" className="project-menu__item project-menu__settings">
                <FontAwesomeIcon icon={faEllipsisV}/>
            </Link>
        </div>
    )
}