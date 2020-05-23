import React, { Component } from 'react';
import '../../styles/work-edit/work-form.css'

export class AddWorkForm extends Component {
    render() {
        return (
            <form className="work-form">
                <input className="work-form__input" placeholder="Work name" type="text" name="" id="" />
                <a className="work-form__link" type="form" href="">Add Work</a>
            </form>
        )
    }
}
