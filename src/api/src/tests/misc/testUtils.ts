import {Application} from "express";
import {Connection} from "typeorm/index";
import {setupApp} from "../../app";
import {testConnection} from "./testConnection";

export const cleanDB = async (connection: Connection): Promise<void> => {
    const entities = connection.entityMetadatas;
    for (const entity of entities) {
        const repository = connection.getRepository(entity.name);
        await repository.query(`TRUNCATE TABLE "${entity.tableName}" RESTART IDENTITY CASCADE;`);
    }
}

export const makeTestApp = async (): Promise<[Application, Connection]> => await setupApp(true, testConnection)
