import React from 'react';
import '../../styles/work-edit/work-menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

interface IMenuProps {
    workId: number;
}

export function Menu() {
    return (
        <div className="work-menu">
            <ul className="work-menu__items">
                <li className="work-menu__item">
                    <a className="work-menu__link" href="#">Changes</a>
                </li>
            </ul>
            <a href="#" className="work-menu__item work-menu__settings"><FontAwesomeIcon icon={faEllipsisV} /></a>
        </div>
    )
}