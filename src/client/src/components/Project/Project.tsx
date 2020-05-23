import React, { Component } from 'react';
import { Breadcrumb } from '../Breadcrumb';
import { ProjectMenu } from './Menu';
import { ProjectWorks } from './ProjectWorks';
import { AddWorkForm } from './AddWorkForm';

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

export class Project extends Component {
    render() {
        return (
            <div className="container">
                <Breadcrumb items={breadcrumbItems} />
                <ProjectMenu />
                <ProjectWorks />
                <AddWorkForm />
            </div>
        )
    }
}
