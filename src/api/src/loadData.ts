import {Connection} from "typeorm";
import {User} from "./entity/User";
import {Work} from "./entity/Work";
import {Change} from "./entity/Change";
import {Project} from "./entity/Project";

const createUser = async (connection: Connection, googleId: string, username: string): Promise<User> => {
    console.log("Inserting a new user into the database...");
    const user = new User();
    user.username = username;
    user.image = "google profile image";
    user.googleId = googleId;
    user.created = (new Date()).toUTCString();
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);
    return user;
}

const createWork = async (connection: Connection, name: string, author: User, project: Project, content: string): Promise<Work> => {
    console.log("Inserting a new work into the database...");
    const work = new Work();
    work.name = name;
    work.author = author;
    work.project = project;
    work.created = (new Date()).toUTCString();
    work.content = content;
    await connection.manager.save(work);
    console.log("Saved a new work with id: " + work.id);
    return work;
}

const createChange = async (connection: Connection, name: string, content: string, user: User, work: Work): Promise<void> => {
    console.log("Inserting a new change into the database...");
    const change = new Change();
    change.name = name;
    change.content = content;
    change.author = user;
    change.created = (new Date()).toUTCString();
    change.work = work;
    await connection.manager.save(change);
    console.log("Saved a new user with id: " + change.id);
}

const createProject = async (connection: Connection, name: string, user: User): Promise<Project> => {
    console.log("Inserting a new change into the database...");
    const project = new Project();
    project.name = name
    project.owner = user;
    project.created = (new Date()).toUTCString();
    await connection.manager.save(project);
    console.log("Saved a new user with id: " + project.id);
    return project;
}

const printAllData = async (connection: Connection): Promise<void> => {
    const usersRepository = await connection.getRepository(User);
    const users = await usersRepository.find({relations: ["works", "changes", "ownProjects", "invitedToProjects"]});
    users.forEach(user => console.log(user));

    const projectsRepository = await connection.getRepository(Project);
    const projects = await projectsRepository.find({relations: ["owner", "invitedUsers", "works"]});
    projects.forEach(project => console.log(project));

    const worksRepository = await connection.getRepository(Work);
    const works = await worksRepository.find({relations: ["author", "project", "changes"]});
    works.forEach(work => console.log(work));

    const changesRepository = await connection.getRepository(Change);
    const changes = await changesRepository.find({relations: ["author", "work"]});
    changes.forEach(change => console.log(change));
}


export const loadData = async (connection: Connection): Promise<void> => {
    console.log("Finding users in DB");
    const user = await connection.manager.findOne(User);

    if (user === undefined) {
        const michal = await createUser(connection, "1", "Michal Michalis");
        const tomas = await createUser(connection, "2", "Tomas Tomasic");
        const project = await createProject(connection, "Gbelany bridge", tomas);
        const work = await createWork(connection, "Bridge", michal, project, "Build a funckig bridge.");
        const change = await createChange(connection, "Update profanities.", "Build awesome bridge.", tomas, work);
    }

    await printAllData(connection);
}
