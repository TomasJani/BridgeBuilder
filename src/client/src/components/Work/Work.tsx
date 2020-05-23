import React, { Component } from 'react';
import { Breadcrumb } from '../Breadcrumb';
import { Menu } from './Menu';
import { Header } from './Header';
import { Editor } from './Editor';
import { Form } from './Form';

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

export class Work extends Component {
    render() {
        return (
            <div className="container">
                <Breadcrumb items={breadcrumbItems} />
                <Menu />
                <Header name="Work name" />
                <Editor />
                <Form />
            </div>
        )
    }
}
