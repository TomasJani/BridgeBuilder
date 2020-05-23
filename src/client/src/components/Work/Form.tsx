import React from 'react';
import '../../styles/work-edit/work-form.css'

interface IEditorProps {
    workId: number;
}

export function Form() {
    return (
        <form className="work-form">
            <input className="work-form__input" placeholder="Change message" type="text" name="" id="" />
            <a className="work-form__link" type="form" href="">Change</a>
        </form>
    )
}