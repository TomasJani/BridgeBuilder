import {Application} from "express"
import * as bodyParser from "body-parser";
import * as cors from "cors"
import {workRoutes} from "./work";
import {Connection} from "typeorm";
import {changeRoutes} from "./change";
import {userRoutes} from "./user";
import {projectRoutes} from "./project";

export function routes(app: Application, connection: Connection, port: string): void {
    app.use(bodyParser.json());
    app.use(cors());

    workRoutes(app, connection);
    changeRoutes(app, connection);
    userRoutes(app, connection);
    projectRoutes(app, connection);

    app.listen(port, function () {
        console.log(`App is listening on port ${port}`);
    });
}
