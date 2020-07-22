import React from 'react';
import '../../styles/work-edit/work-menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import {Link, useRouteMatch} from "react-router-dom";

export function Menu() {
    let {url} = useRouteMatch();

    return (
        <div className="work-menu">
            <ul className="work-menu__items">
                <li className="work-menu__item">
                    <Link className="work-menu__link" to={`${url}`}>Edit</Link>
                </li>
                <li className="work-menu__item">
                    <Link className="work-menu__link" to={`${url}/changes`}>Changes</Link>
                </li>
            </ul>
            <Link to="#" className="work-menu__item work-menu__settings"><FontAwesomeIcon icon={faEllipsisV} /></Link>
        </div>
    )
}