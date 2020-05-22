import React from 'react';
import '../styles/breadcrumb.css'

interface IBreadcrumbItem {
    name: string,
    url: string
}

interface IBreadcrumbProps {
    items: Array<IBreadcrumbItem>;
}

export function Breadcrumb(props: IBreadcrumbProps) {
    return (
        <div className="bradcrumb">
            {props.items.map((item: IBreadcrumbItem) => {
                return <span><a className="breadcrumb__link" href={item.url}>{item.name}</a> / </span>
            })}
        </div>
    )
} 