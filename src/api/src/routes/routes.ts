import { Application } from "express"
import * as bodyParser from "body-parser";
import * as cors from "cors"
import { workRoutes } from "./work";
import { Connection } from "typeorm";
import { changeRoutes } from "./change";

export function routes(app: Application, connection: Connection, port: String) {
    app.use(bodyParser.json());
    app.use(cors());

    workRoutes(app, connection);
    changeRoutes(app, connection);

    app.listen(port, function () {
        console.log(`App is listening on port ${port}`);
    });
}
