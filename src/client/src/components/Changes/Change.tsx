import React from 'react';
import { IUser } from '../../interfaces/entities/User';
import '../../styles/change/change.css'

interface IChangeProps {
    id: number;
    name: string;
    created: string;
    author: IUser;
}

export function Change(props: IChangeProps) {
    return (
        <div className="change">
            <ul className="change__items">
                <li className="change__item">
                    <a className="change__link" href="#">{props.name}</a>
                </li>
                <li className="change__item">
                    <a className="change__link" href="#">{props.author.username}</a>
                </li>
            </ul>
            <span className="change__link change__date">{props.created}</span>
        </div>
    )
}