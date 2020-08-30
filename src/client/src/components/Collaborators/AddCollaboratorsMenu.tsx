import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

import '../../styles/collaborators/add-collaborator-menu.css'

export function AddCollaboratorMenu() {
    return (
        <div className="add-collaborator-menu">
            <ul className="add-collaborator-menu__items">
                <li className="add-collaborator-menu__item">
                    <span className="add-collaborator-menu__link">Collaborator</span>
                </li>
                <li className="add-collaborator-menu__item">
                    <span className="add-collaborator-menu__link">Invite</span>
                </li>
            </ul>
            <Link to="#" className="add-collaborator-menu__item add-collaborator-menu__settings">
                <FontAwesomeIcon icon={faEllipsisV} />
            </Link>
        </div>
    )
}
