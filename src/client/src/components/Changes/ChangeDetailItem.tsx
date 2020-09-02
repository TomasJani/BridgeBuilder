import React, {useEffect} from 'react';
import '../../styles/change/change.css'
import {Link, useHistory} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {inject, observer} from "mobx-react";
import {Stores} from "../../stores/Stores";
import {ChangeStore} from "../../stores/ChangeStore";

interface IChangeDetailItemProps {
    ChangeStore?: ChangeStore,
    changeId: number
}

export const ChangeDetailItem = inject(Stores.CHANGE_STORE)(observer((props: IChangeDetailItemProps) => {
    let history = useHistory()

    useEffect(() => {
        const load = async () => {
            await props.ChangeStore?.find(props.changeId)
        }
        load().then()
    }, [props.ChangeStore, props.changeId])

    const deleteChange = async (e: any) => {
        await props.ChangeStore?.deleteChange(props.ChangeStore?.change!)
        const work = props.ChangeStore?.change?.work
        const workId = work?.id
        const projectId = work?.project.id
        history.push(`/${projectId}/works/${workId}/changes`)
    }

    return (
        <div className="change">
            <ul className="change__items">
                <li className="change__item">
                    <Link className="change__link"
                          to={`
        changes /${props.ChangeStore?.change?.id}`}>{props.ChangeStore?.change?.name}</Link>
                </li>
                <li className="change__item">
                    <Link className="change__link" to="#">{props.ChangeStore?.change?.author?.username}</Link>
                </li>
                <li className="change__item">
                    <a className="change__link change-header__link"
                       onClick={deleteChange}><FontAwesomeIcon
                        icon={faTrash}/></a>
                </li>
            </ul>
            <span className="change__link change__date">{props.ChangeStore?.change?.created}</span>
        </div>
    )
}))
