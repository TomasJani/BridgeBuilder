import React from 'react';
import {ProjectsMenu} from "./ProjectsMenu";
import {ProjectsList} from "./ProjectsList";
import {AddProjectForm} from "./AddProjectForm";
import {Stores} from "../../stores/Stores";
import {inject, observer} from "mobx-react";
import {UserStore} from "../../stores/UserStore";

import {useHistory} from "react-router-dom";
import {useAuthRedirect} from "../useAuthRedirect";
import {GUESTS_HOME_ROUTE} from "../../constants";

interface IProjectsProps {
    UserStore?: UserStore
}

export const Projects = inject(Stores.USER_STORE)(observer((props: IProjectsProps) => {
    useAuthRedirect(useHistory(), false, GUESTS_HOME_ROUTE, props.UserStore)

    return (
        <div className="container">
            <ProjectsMenu/>
            <ProjectsList/>
            <AddProjectForm/>
        </div>
    )
}));
