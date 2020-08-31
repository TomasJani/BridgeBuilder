import React from 'react';
import '../../styles/projects/projects-menu.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

export function ChangesMenu() {
    return (
        <div className="projects-menu">
            <ul className="projects-menu__items">
                <li className="projects-menu__item">
                    <span className="projects-menu__link">Change</span>
                </li>
                <li className="projects-menu__item">
                    <span className="projects-menu__link">Owner</span>
                </li>
            </ul>
            <Link to="#" className="projects-menu__item projects-menu__settings">
                <FontAwesomeIcon icon={faEllipsisV}/>
            </Link>
        </div>
    )
}
