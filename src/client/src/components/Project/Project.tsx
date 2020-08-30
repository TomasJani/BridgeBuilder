import React from 'react';
import {Breadcrumb} from '../Breadcrumb';
import {ProjectMenu} from './Menu';
import {ProjectWorks} from './ProjectWorks';
import {AddWorkForm} from './AddWorkForm';
import {Route, Switch, useHistory, useParams, useRouteMatch} from "react-router-dom";
import {Changes} from "../Changes/Changes";
import {useAuthRedirect} from "../useAuthRedirect";
import {inject, observer} from "mobx-react";
import {Stores} from "../../stores/Stores";
import {UserStore} from "../../stores/UserStore";
import {GUESTS_HOME_ROUTE} from "../../constants";

interface IProjectProps {
    UserStore?: UserStore
}

export const Project = inject(Stores.USER_STORE)(observer((props: IProjectProps) => {
    const {id} = useParams();
    let {path} = useRouteMatch();

    useAuthRedirect(useHistory(), false, GUESTS_HOME_ROUTE, props.UserStore)

    return (
        <div className="container">
            <Breadcrumb/>
            <ProjectMenu/>

            <Switch>
                <Route exact path={`${path}/works`}>
                    <ProjectWorks id={id}/>
                </Route>
                <Route path={`${path}/changes`}>
                    <Changes projectId={id}/>
                </Route>
            </Switch>

            <AddWorkForm id={id}/>
        </div>
    )
}));
