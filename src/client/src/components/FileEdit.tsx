import React, { Component } from 'react';
import { Breadcrumb } from './Breadcrumb';
import { FileMainMenu } from './FileMainMenu';
import { FileHeader } from './FileHeader';
import { FileEditor } from './FileEditor';
import { FileSubmit } from './FileSubmit';

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

export class FileEdit extends Component {
    render() {
        return (
            <div className="container">
                <Breadcrumb items={breadcrumbItems} />
                <FileMainMenu />
                <FileHeader />
                <FileEditor />
                <FileSubmit />
            </div>
        )
    }
}
