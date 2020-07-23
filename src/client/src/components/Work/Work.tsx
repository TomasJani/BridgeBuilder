import React from 'react';
import {Breadcrumb} from '../Breadcrumb';
import {Menu} from './Menu';
import {Header} from './Header';
import {Form} from './Form';
import {Link, Route, Switch, useParams, useRouteMatch} from "react-router-dom";
import {Changes} from "../Changes/Changes";

export function Work() {
    const { id, projectId } = useParams();
    let {path} = useRouteMatch();

    return (
        <div className="container">
            <Breadcrumb items={[{
                "name": "Project",
                "url": `/projects/${projectId}/works`
            }]}/>
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
