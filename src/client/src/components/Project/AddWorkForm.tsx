import React, {useState} from 'react';
import '../../styles/work-edit/work-form.css'
import {WorkStore} from '../../stores/WorkStore';
import {IWorkCreate} from '../../interfaces/entities/Work';
import {inject, observer} from 'mobx-react';
import {Stores} from '../../stores/Stores';
import {UserStore} from "../../stores/UserStore";
import {useGetCurrentUser} from "../../hooks/useGetCurrentUser";

interface IAddWorkFormProps {
    WorkStore?: WorkStore;
    UserStore?: UserStore;
    id: number
}

export const AddWorkForm = inject(Stores.USER_STORE, Stores.WORK_STORE)(observer((props: IAddWorkFormProps) => {
    const [name, setName] = useState("")
    useGetCurrentUser(props.UserStore)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (name === '') {
            return
        }

        const newWork: IWorkCreate = {
            project: props.id,
            name: name,
            content: "",
            author: props.UserStore?.user?.id!,
            created: (new Date()).toUTCString(),
        }

        setName(name)
        await props.WorkStore!.addWork(newWork);
    }

    return (
        <form className="work-form" onSubmit={handleSubmit}>
            <input className="work-form__input" value={name}
                   onChange={(e) => setName(e.target.value)}
                   placeholder="Work name" type="text"/>
            <button type="submit" className="work-form__link">Add Work</button>
        </form>
    )
}))
