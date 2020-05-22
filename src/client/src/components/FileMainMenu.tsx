import React from 'react';
import '../styles/file-menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

export function FileMainMenu() {
    return (
        <div className="file-menu">
            <ul className="file-menu__items">
                <li className="file-menu__item">
                    <a className="file-menu__link" href="#">Content</a>
                </li>
                <li className="file-menu__item">
                    <a className="file-menu__link" href="#">Changes</a>
                </li>
            </ul>
            <a href="#" className="file-menu__item file-menu__settings"><FontAwesomeIcon icon={faEllipsisV} /></a>
        </div>
    )
}