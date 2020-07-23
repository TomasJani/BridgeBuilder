import React from 'react';
import {Breadcrumb} from '../Breadcrumb';
import {ProjectMenu} from './Menu';
import {ProjectWorks} from './ProjectWorks';
import {AddWorkForm} from './AddWorkForm';
import {Route, Switch, useParams, useRouteMatch} from "react-router-dom";
import {Changes} from "../Changes/Changes";

export function Project() {
    const {id} = useParams();
    let {path} = useRouteMatch();

    return (
        <div className="container">
            <Breadcrumb/>
            <ProjectMenu/>

            <Switch>
                <Route exact path={`${path}/works`}>
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
