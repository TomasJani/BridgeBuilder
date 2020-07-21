import React from 'react';
import {Breadcrumb} from '../Breadcrumb';
import {Menu} from './Menu';
import {Header} from './Header';
import {Form} from './Form';
import {useParams} from "react-router-dom";

const breadcrumbItems = [
    {
        name: "Javascript",
        url: "javscript.com"
    },
    {
        name: "Visual Studio Code",
        url: "javscript.com/viusal-studio-code"
    }
]

export function Work() {
    const { id } = useParams();

    return (
        <div className="container">
            <Breadcrumb items={breadcrumbItems}/>
            <Menu/>
            <Header workId={id}/>
            <Form workId={id}/>
        </div>
    )
}
