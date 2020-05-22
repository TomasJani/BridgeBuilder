import React, { Component } from 'react';
import { Breadcrumb } from '../Breadcrumb';
import { WorkMainMenu } from './WorkMainMenu';
import { WorkHeader } from './WorkHeader';
import { WorkEditor } from './WorkEditor';
import { WorkSubmit } from './WorkSubmit';

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

export class WorkEdit extends Component {
    render() {
        return (
            <div className="container">
                <Breadcrumb items={breadcrumbItems} />
                <WorkMainMenu />
                <WorkHeader name="Work name" change="commit" />
                <WorkEditor />
                <WorkSubmit />
            </div>
        )
    }
}
