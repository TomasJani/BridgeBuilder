import React from 'react';
import '../styles/file-header.css'

export function FileHeader() {
    return (
        <div className="file-header">
            <ul className="file-header__items">
                <li className="file-header__item">
                    <a className="file-header__link" href="#">File Name</a>
                </li>
                <li className="file-header__item">
                    <a className="file-header__link" href="#">last commit</a>
                </li>
            </ul>
            <span className="file-header__link file-header__date">20.2.2019</span>
        </div>
    )
}