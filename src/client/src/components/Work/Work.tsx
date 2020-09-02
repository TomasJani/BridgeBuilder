import React from 'react';
import {Breadcrumb} from '../Breadcrumb';
import {Menu} from './Menu';
import {Header} from './Header';
import {Form} from './Form';
import {useHistory, useParams} from "react-router-dom";
import {useAuthRedirect} from "../../hooks/useAuthRedirect";
import {inject, observer} from "mobx-react";
import {Stores} from "../../stores/Stores";
import {UserStore} from "../../stores/UserStore";
import {GUESTS_HOME_ROUTE} from "../../constants";

interface IWorkProps {
    UserStore?: UserStore
}

export const Work = inject(Stores.USER_STORE)(observer((props: IWorkProps) => {
    const {id, projectId} = useParams();
    useAuthRedirect(useHistory(), false, GUESTS_HOME_ROUTE, props.UserStore)

    return (
        <div className="container">
            <Breadcrumb items={[{
                "name": "Project",
                "url": `/projects/${projectId}/works`
            }]}/>
            <Menu/>
            <Header workId={id}/>
            <Form workId={id}/>
        </div>
    )
}));

export default Work
