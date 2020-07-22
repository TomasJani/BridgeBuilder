import {Application} from "express"
import {workRoutes} from "./work";
import {changeRoutes} from "./change";
import {userRoutes} from "./user";
import {projectRoutes} from "./project";
import {authRoutes} from "./auth";

export function routes(app: Application, port: string): void {
    authRoutes(app);
    workRoutes(app);
    changeRoutes(app);
    userRoutes(app);
    projectRoutes(app);

    app.listen(port, function () {
        console.log(`App is listening on port ${port}`);
    });
}
