import React from 'react';
import '../../styles/projects/project-form.css'
import {inject, observer} from "mobx-react";
import {Stores} from "../../stores/Stores";
import {ChangeStore} from "../../stores/ChangeStore";
import {UserStore} from "../../stores/UserStore";
import {AddForm} from "../AddForm";
import {useGetCurrentUser} from "../../hooks/useGetCurrentUser";

interface IAddChangeFormProps {
    workId: number
    ChangeStore?: ChangeStore
    UserStore?: UserStore
}


export const AddChangeForm = inject(Stores.CHANGE_STORE, Stores.USER_STORE)(observer((props: IAddChangeFormProps) => {
    useGetCurrentUser()
    return (
        <AddForm
            addEntity={props.ChangeStore?.addChange!}
            buttonTitle={"Add change"} placeholder={"Change name"}
            items={{
                author: props.UserStore?.user?.id!,
                work: props.workId,
                content: ""
            }}/>
    )
}))
