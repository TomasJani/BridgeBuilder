import React, {Component} from 'react';
import '../styles/breadcrumb.css'
import {Link} from "react-router-dom";
import {inject, observer} from "mobx-react";
import {Stores} from "../stores/Stores";
import {BreadcrumbStore} from "../stores/BreadcrumbStore";
import {IBreadcrumbItem} from "../interfaces/entities/BreadcrumbItem";

interface IBreadcrumbProps {
    BreadcrumbStore?: BreadcrumbStore
}

@inject(Stores.BREADCRUMB_STORE)
@observer
export class Breadcrumb extends Component<IBreadcrumbProps>{
    render() {
        return (
            <div className="breadcrumb">
                {this.load().map((item) => {
                    if (item)
                        return <span><Link className="breadcrumb__link" to={item.url}>{item.name}</Link> / </span>
                    return null;
                })}
            </div>
        )
    }

    load = () => {
        let items: Array<IBreadcrumbItem> = new Array<IBreadcrumbItem>();
        items.push(this.props.BreadcrumbStore?.projects as IBreadcrumbItem);
        items.push(this.props.BreadcrumbStore?.project as IBreadcrumbItem);
        items.push(this.props.BreadcrumbStore?.work as IBreadcrumbItem);
        return items;
    }
}