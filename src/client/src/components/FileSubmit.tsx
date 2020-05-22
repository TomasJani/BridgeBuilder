import React from 'react';
import '../styles/file-submit.css'

export function FileSubmit() {
    return (
        <form className="file-submit">
            <input className="file-submit__input" placeholder="Change message" type="text" name="" id="" />
            <a className="file-submit__link" type="submit" href="">Change</a>
        </form>
    )
}