import React, {useEffect} from 'react';
import {inject, observer} from 'mobx-react';
import {Stores} from '../../stores/Stores';
import {ChangeStore} from '../../stores/ChangeStore';
import {Change} from './Change';
import {useParams} from "react-router-dom";
import {ChangesMenu} from "./ChangesMenu"
import {AddChangeForm} from "./AddChangeForm"

interface IChangesProps {
    ChangeStore?: ChangeStore;
}

export const Changes = inject(Stores.CHANGE_STORE)(observer((props: IChangesProps) => {
    const {workId} = useParams();

    useEffect(() => {
        const load = async () => {
            if (workId !== undefined) await props.ChangeStore?.loadChanges(workId);
        }
        load().then()
    }, [props.ChangeStore, workId])

    return (
        <div className={"container"}>
            <ChangesMenu/>
            {props.ChangeStore?.changes.map(change => <Change key={change.id} change={change}/>)}
            <AddChangeForm workId={workId}/>
        </div>
    )
}))

export default Changes;
