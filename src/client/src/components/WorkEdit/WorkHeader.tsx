import React from 'react';
import '../../styles/work-edit/work-header.css'

interface IWorkHeaderProps {
    name: string,
    change: any
}

export function WorkHeader(props: IWorkHeaderProps) {
    return (
        <div className="work-header">
            <ul className="work-header__items">
                <li className="work-header__item">
                    <a className="work-header__link" href="#">{props.name}</a>
                </li>
                <li className="work-header__item">
                    <a className="work-header__link" href="#">last commit</a>
                </li>
            </ul>
            <span className="work-header__link work-header__date">20.2.2019</span>
        </div>
    )
}