import React, {Component} from 'react';
import '../../styles/work-edit/work-header.css'
import {inject, observer} from "mobx-react";
import {Stores} from "../../stores/Stores";
import {WorkStore} from "../../stores/WorkStore";

interface IHeaderProps {
    WorkStore?: WorkStore
    workId: number
}

@inject(Stores.WORK_STORE)
@observer
export class Header extends Component<IHeaderProps> {
    render() {
        if (!this.props.WorkStore?.work) {
            return <p>Loading...</p>
        }
        let work = this.props.WorkStore?.work;
        return (
            <div className="work-header">
                <ul className="work-header__items">
                    <li className="work-header__item">
                        <span className="work-header__link">{work.name}</span>
                    </li>
                    <li className="work-header__item">
                        <span className="work-header__link">{work.author.username}</span>
                    </li>
                </ul>
                <span className="work-header__link work-header__date">{work.created}</span>
            </div>
        )
    }

    async componentDidMount() {
        await this.props.WorkStore?.find(this.props.workId);
    }
}