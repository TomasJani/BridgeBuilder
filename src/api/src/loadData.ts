import { Connection } from "typeorm";
import { User } from "./entity/User";
import { Work } from "./entity/Work";
import { Change } from "./entity/Change";

const createUser = async (connection: Connection, firstName: string, lastName: string, age: number): Promise<User> => {
    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName
    user.age = age
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);
    return user;
}

const createWork = async (connection: Connection, name: string, author: User, content: string): Promise<Work> => {
    console.log("Inserting a new work into the database...");
    const work = new Work();
    work.name = name
    work.author = author;
    work.created = (new Date()).toUTCString();
    work.content = content;
    await connection.manager.save(work);
    console.log("Saved a new work with id: " + work.id);
    return work;
}

const createChange = async (connection: Connection, name: string, content: string, user: User, work: Work): Promise<void> => {
    console.log("Inserting a new change into the database...");
    const change = new Change();
    change.name = name
    change.content = content;
    change.author = user;
    change.created = (new Date()).toUTCString();
    change.work = work;
    await connection.manager.save(change);
    console.log("Saved a new user with id: " + change.id);
}

export const loadData = async (connection: Connection) => {
    console.log("Finding users in DB");
    const user = await connection.manager.findOne(User);

    if (user === undefined) {
        const michal = await createUser(connection, "Michal", "Michalis", 15);
        const tomas = await createUser(connection, "Tomas", "Tomasic", 12);

        const work = await createWork(connection, "Bridge", michal, "Build a funckig bridge.");

        const change = await createChange(connection, "Update profanities.", "Build awesome bridge.", tomas, work);

        const users = await connection.manager.find(User);
        users.forEach(
            user => {
                console.log(user);
            }
        )
    }
}
