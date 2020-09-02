import React, {useEffect} from 'react';
import {inject, observer} from 'mobx-react';
import {Stores} from '../../stores/Stores';
import {ChangeStore} from '../../stores/ChangeStore';
import {ChangesMenu} from "./ChangesMenu"
import {useParams} from "react-router-dom";
import {ChangeDetailItem} from "./ChangeDetailItem"
import {ChangeEditForm} from "./ChangeEditForm"

interface IChangeDetailProps {
    ChangeStore?: ChangeStore;
}

export const ChangeDetail = inject(Stores.CHANGE_STORE)(observer((props: IChangeDetailProps) => {
    const {id} = useParams();

    useEffect(() => {
        const load = async () => {
            await props.ChangeStore?.find(id)
        }
        load().then()
    }, [id, props.ChangeStore])

    return (
        <div className={"container"}>
            <ChangesMenu/>
            <ChangeDetailItem changeId={id}/>
            <ChangeEditForm changeId={id}/>
        </div>
    )
}))
