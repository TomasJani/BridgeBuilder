import React, {useState} from 'react';
import '../styles/AddForm.css'

interface IAddFormProps {
    addEntity: Function,
    items: Object
    placeholder: string
    buttonTitle: string
}

export const AddForm = (props: IAddFormProps) => {
    const [name, setName] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (name === '') {
            return
        }

        const newEntity: Object = {
            name: name,
            created: (new Date()).toUTCString(),
            ...props.items
        }

        setName("")
        await props.addEntity(newEntity);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <input className="add-form__input" value={name} onChange={e => setName(e.target.value)}
                   placeholder={props.placeholder} type="text"/>
            <button type="submit" className="add-form__link">{props.buttonTitle}</button>
        </form>
    )
}

