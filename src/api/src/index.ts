import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import { Application } from "express";
import { routes } from "./routes/routes";
import { loadData } from "./loadData";
import "./envLoader";
import {setupPassport} from "./config/passport";


createConnection().then(async connection => {
    const app: Application = express();
    const port: string = process.env.PORT || "5000";

    await setupPassport(app,connection);
    routes(app, port);

    await loadData(connection);
}).catch(error => console.log(error));
