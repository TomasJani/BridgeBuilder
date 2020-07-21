import React from 'react';
import {Breadcrumb} from '../Breadcrumb';
import {ProjectMenu} from './Menu';
import {ProjectWorks} from './ProjectWorks';
import {AddWorkForm} from './AddWorkForm';
import {Route, Switch, useParams, useRouteMatch} from "react-router-dom";
import {Changes} from "../Changes/Changes";

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

export function Project() {
    const {id} = useParams();
    let {path} = useRouteMatch();

    return (
        <div className="container">
            <Breadcrumb items={breadcrumbItems}/>
            <ProjectMenu/>

            <Switch>
                <Route exact path={`${path}`}>
                    <ProjectWorks id={id}/>
                </Route>
                <Route path={`${path}/changes`}>
                    <Changes projectId={id} />
                </Route>
            </Switch>

            <AddWorkForm id={id}/>
        </div>
    )
}
