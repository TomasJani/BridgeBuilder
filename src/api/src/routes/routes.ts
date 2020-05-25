import { Application } from "express"
import * as bodyParser from "body-parser";
import * as cors from "cors"
import { workRoutes } from "./work";
import { changeRoutes } from "./change";
import { userRoutes } from "./user";
import { projectRoutes } from "./project";

export function routes(app: Application, port: string): void {
    app.use(bodyParser.json());
    app.use(cors());

    workRoutes(app);
    changeRoutes(app);
    userRoutes(app);
    projectRoutes(app);

    app.listen(port, function () {
        console.log(`App is listening on port ${port}`);
    });
}
