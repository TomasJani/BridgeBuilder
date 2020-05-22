import React from 'react';
import '../../styles/work-edit/work-menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

export function WorkMainMenu() {
    return (
        <div className="work-menu">
            <ul className="work-menu__items">
                <li className="work-menu__item">
                    <a className="work-menu__link" href="#">Content</a>
                </li>
                <li className="work-menu__item">
                    <a className="work-menu__link" href="#">Changes</a>
                </li>
            </ul>
            <a href="#" className="work-menu__item work-menu__settings"><FontAwesomeIcon icon={faEllipsisV} /></a>
        </div>
    )
}