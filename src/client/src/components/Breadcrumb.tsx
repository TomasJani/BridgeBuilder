import React, {Component} from 'react';
import '../styles/breadcrumb.css'
import {Link} from "react-router-dom";
import {IBreadcrumbItem} from "../interfaces/entities/BreadcrumbItem";

interface IBreadcrumbProps {
    items?: Array<IBreadcrumbItem>
}

export class Breadcrumb extends Component<IBreadcrumbProps>{
    render() {
        return (
            <div className="breadcrumb">
                <span><Link className="breadcrumb__link" to="/projects">Projects</Link> / </span>
                {this.props.items?.map((item) => {
                    if (item)
                        return <span><Link className="breadcrumb__link" to={item.url}>{item.name}</Link> / </span>
                    return null;
                })}
            </div>
        )
    }
}