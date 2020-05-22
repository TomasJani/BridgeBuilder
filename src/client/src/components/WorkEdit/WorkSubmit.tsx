import React from 'react';
import '../../styles/work-edit/work-submit.css'

export function WorkSubmit() {
    return (
        <form className="work-submit">
            <input className="work-submit__input" placeholder="Change message" type="text" name="" id="" />
            <a className="work-submit__link" type="submit" href="">Change</a>
        </form>
    )
}