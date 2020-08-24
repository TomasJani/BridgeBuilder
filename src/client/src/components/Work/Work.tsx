import React from 'react';
import {Breadcrumb} from '../Breadcrumb';
import {Menu} from './Menu';
import {Header} from './Header';
import {Form} from './Form';
import {Route, Switch, useHistory, useParams, useRouteMatch} from "react-router-dom";
import {Changes} from "../Changes/Changes";
import {useAuthRedirect} from "../useAuthRedirect";
import {inject, observer} from "mobx-react";
import {Stores} from "../../stores/Stores";
import {UserStore} from "../../stores/UserStore";
import {GUESTS_HOME_ROUTE} from "../../constants";

interface IWorkProps {
    UserStore?: UserStore
}

export const Work = inject(Stores.USER_STORE)(observer((props: IWorkProps) => {
    const {id, projectId} = useParams();
    let {path} = useRouteMatch();

    useAuthRedirect(useHistory(), false, GUESTS_HOME_ROUTE, props.UserStore)

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
                    <Changes workId={id}/>
                </Route>
            </Switch>

        </div>
    )
}));
