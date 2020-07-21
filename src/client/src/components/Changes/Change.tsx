import React from 'react';
import '../../styles/change/change.css'
import {Link} from "react-router-dom";
import {IChange} from "../../interfaces/entities/Change";

interface IChangeProps {
    change: IChange
}

export function Change(props: IChangeProps) {
    return (
        <div className="change">
            <ul className="change__items">
                <li className="change__item">
                    <Link className="change__link" to={`changes/${props.change.id}`}>{props.change.name}</Link>
                </li>
                <li className="change__item">
                    <Link className="change__link" to="#">{props.change.author.username}</Link>
                </li>
            </ul>
            <span className="change__link change__date">{props.change.created}</span>
        </div>
    )
}