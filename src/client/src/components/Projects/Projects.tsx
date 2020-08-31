import React from 'react';
import {ProjectsMenu} from "./ProjectsMenu";
import {ProjectsList} from "./ProjectsList";
import {AddProjectForm} from "./AddProjectForm";
import {Stores} from "../../stores/Stores";
import {inject, observer} from "mobx-react";
import {UserStore} from "../../stores/UserStore";

import {useHistory} from "react-router-dom";
import {useAuthRedirect} from "../../hooks/useAuthRedirect";
import {GUESTS_HOME_ROUTE} from "../../constants";
import {useRewriteUrl} from "../../hooks/useRewriteUrl";

interface IProjectsProps {
    UserStore?: UserStore
}

export const Projects = inject(Stores.USER_STORE)(observer((props: IProjectsProps) => {
    let history = useHistory()
    useAuthRedirect(history, false, GUESTS_HOME_ROUTE, props.UserStore)
    useRewriteUrl(history, "/projects")

    return (
        <div className="container">
            <ProjectsMenu/>
            <ProjectsList/>
            <AddProjectForm/>
        </div>
    )
}));
