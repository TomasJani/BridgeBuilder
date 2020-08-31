import React from 'react';
import {Breadcrumb} from '../Breadcrumb';
import {ProjectMenu} from './Menu';
import {ProjectWorks} from './ProjectWorks';
import {AddWorkForm} from './AddWorkForm';
import {useHistory, useParams} from "react-router-dom";
import {useAuthRedirect} from "../../hooks/useAuthRedirect";
import {inject, observer} from "mobx-react";
import {Stores} from "../../stores/Stores";
import {UserStore} from "../../stores/UserStore";
import {GUESTS_HOME_ROUTE} from "../../constants";

interface IProjectProps {
    UserStore?: UserStore
}

export const Project = inject(Stores.USER_STORE)(observer((props: IProjectProps) => {
    const {id} = useParams();

    useAuthRedirect(useHistory(), false, GUESTS_HOME_ROUTE, props.UserStore)

    return (
        <div className="container">
            <Breadcrumb/>
            <ProjectMenu/>
            <ProjectWorks id={id}/>
            <AddWorkForm id={id}/>
        </div>
    )
}));
