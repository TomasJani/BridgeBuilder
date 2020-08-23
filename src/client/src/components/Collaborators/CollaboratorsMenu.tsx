import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

import '../../styles/collaborators/collaborators-menu.css'

export function CollaboratorsMenu() {
    return (
        <div className="collaborators-menu">
            <ul className="collaborators-menu__items">
                <li className="collaborators-menu__item">
                    <span className="collaborators-menu__link">Collaborator</span>
                </li>
                <li className="collaborators-menu__item">
                    <span className="collaborators-menu__link">Kick</span>
                </li>
            </ul>
            <Link to="#" className="collaborators-menu__item collaborators-menu__settings">
                <FontAwesomeIcon icon={faEllipsisV} />
            </Link>
        </div>
    )
}
