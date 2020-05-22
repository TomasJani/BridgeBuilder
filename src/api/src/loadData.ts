import { Connection } from "typeorm";
import { User } from "./entity/User";
import { Work } from "./entity/Work";
import { Change } from "./entity/Change";

const createUser = async (connection: Connection, name: string): Promise<void> => {
    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = name;
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);
}

const createWork = async (connection: Connection, name: string): Promise<void> => {
    console.log("Inserting a new work into the database...");
    const work = new Work();
    work.name = ""
    await connection.manager.save(work);
    console.log("Saved a new user with id: " + work.id);
}

const createChange = async (connection: Connection, name: string): Promise<void> => {
    console.log("Inserting a new change into the database...");
    const change = new Change();
    change.firstName = name;
    await connection.manager.save(change);
    console.log("Saved a new user with id: " + change.id);
}

export const loadData = async (connection: Connection) => {
    console.log("Finding users in DB");
    const user = await connection.manager.findOne(User);

    if (user == undefined) {
        await createUser(connection, "Michal");
        await createUser(connection, "Tomas");
    }

    const users = await connection.manager.find(User);
    users.forEach(
        user => {
            console.log(user);
        }
    )
}
