import React from 'react';
import {Breadcrumb} from '../Breadcrumb';
import {Menu} from './Menu';
import {Header} from './Header';
import {Form} from './Form';
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

export function Work() {
    const { id } = useParams();
    let {path} = useRouteMatch();

    return (
        <div className="container">
            <Breadcrumb items={breadcrumbItems}/>
            <Menu/>
            <Header workId={id}/>

            <Switch>
                <Route exact path={`${path}`}>
                    <Form workId={id}/>
                </Route>
                <Route path={`${path}/changes`}>
                    <Changes workId={id} />
                </Route>
            </Switch>

        </div>
    )
}
