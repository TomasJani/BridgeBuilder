import "reflect-metadata";
import {createConnection} from "typeorm";
import express, {Application} from "express";
import {routes} from "./routes/routes";
import {loadData} from "./tests/misc/loadData";
import "./envLoader";
import {setupPassport} from "./config/passport";
import {Connection} from "typeorm/index";

export const setupApp = async (testingMode, connectionConfig = null): Promise<[Application, Connection]> => {
    const app: Application = express();
    const connection = connectionConfig === null ? await createConnection() : await createConnection(connectionConfig);

    if (!testingMode) {
        await setupPassport(app, connection);
    }

    routes(app, testingMode);
    return [app, connection];
}

export const listen = async (testingMode): Promise<void> => {
    const [app] = await setupApp(testingMode)
    const port: string = process.env.PORT || "5000";
    app.listen(port, function () {
        console.log(`App is listening on port ${port}`);
    });
}
