import {Application} from "express"
import {workRoutes} from "./work";
import {changeRoutes} from "./change";
import {userRoutes} from "./user";
import {projectRoutes} from "./project";
import {authRoutes} from "./auth";

export function routes(app: Application, testingMode): void {
    if (!testingMode)
        authRoutes(app)
    workRoutes(app, testingMode);
    changeRoutes(app, testingMode);
    userRoutes(app, testingMode);
    projectRoutes(app, testingMode);
}
