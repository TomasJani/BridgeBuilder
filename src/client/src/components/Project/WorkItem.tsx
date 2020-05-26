import React from 'react';
import { IChange } from '../../interfaces/entities/Change';
import '../../styles/work-edit/work-header.css'
import { IUser } from '../../interfaces/entities/User';

interface IWorkProps {
    id: number;
    name: string;
    author: IUser;
    // lastChange: IChange;
    created: string;
}

function WorkItem(props: IWorkProps) {
    return (
        <div className="work-header">
            <ul className="work-header__items">
                <li className="work-header__item">
                    <a className="work-header__link" href="#">{props.name}</a>
                </li>
                <li className="work-header__item">
                    <a className="work-header__link" href="#">{props.author.username}</a>
                </li>
                <li className="work-header__item">
                    <a className="work-header__link" href="#">22.1.2420</a>
                </li>
            </ul>
            <span className="work-header__link work-header__date">{props.created}</span>
        </div>
    )
}

export default WorkItem;
