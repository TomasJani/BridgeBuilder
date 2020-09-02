import React from 'react';
import '../../styles/change/change.css'
import {Link} from "react-router-dom";
import {IChange} from "../../interfaces/entities/Change";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {inject, observer} from "mobx-react";
import {Stores} from "../../stores/Stores";
import {ChangeStore} from "../../stores/ChangeStore";

interface IChangeProps {
    change: IChange
    ChangeStore?: ChangeStore
}

export const Change = inject(Stores.CHANGE_STORE)(observer((props: IChangeProps) => {
    const deleteChange = async (e: any) => {
        await props.ChangeStore?.deleteChange(props.change)
    }

    return (
        <div className="change">
            <ul className="change__items">
                <li className="change__item">
                    <Link className="change__link" to={`/changes/${props.change.id}`}>{props.change.name}</Link>
                </li>
                <li className="change__item">
                    <Link className="change__link" to="#">{props.change.author.username}</Link>
                </li>
                <li className="change__item">
                    <a className="change__link change-header__link"
                       onClick={deleteChange}><FontAwesomeIcon
                        icon={faTrash}/></a>
                </li>
            </ul>
            <span className="change__link change__date">{props.change.created}</span>
        </div>
    )
}))
