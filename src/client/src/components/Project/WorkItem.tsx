import React from 'react';
import '../../styles/work-edit/work-header.css'
import {Link, useParams} from "react-router-dom";
import {IWork} from "../../interfaces/entities/Work";

interface IWorkProps {
    work: IWork
}

function WorkItem(props: IWorkProps) {
    const { id } = useParams();
    return (
        <div className="work-header">
            <ul className="work-header__items">
                <li className="work-header__item">
                    <Link className="work-header__link" to={`/${id}/works/${props.work.id}`}>{props.work.name}</Link>
                </li>
                <li className="work-header__item">
                    <Link className="work-header__link" to="#">{props.work.author.username}</Link>
                </li>
            </ul>
            <span className="work-header__link work-header__date">{props.work.created}</span>
        </div>
    )
}

export default WorkItem;
