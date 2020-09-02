import {Application, Request, Response} from "express";
import {getConnection} from "typeorm";
import {User} from "../entity/User";
import {ensureAuthenticated, passUnauthenticated} from "../config/passport";


export function userRoutes(app: Application, testingMode): void {
    const usersRepository = getConnection().getRepository(User);

    app.get("/users", testingMode ? passUnauthenticated : ensureAuthenticated, async function (req: Request, res: Response) {
        const users = await usersRepository.find({relations: ["ownProjects", "invitedToProjects"]});
        res.json(users);
    });

    app.get("/users/:id", testingMode ? passUnauthenticated : ensureAuthenticated, async function (req: Request, res: Response) {
        const results = await usersRepository.findOne(req.params.id);
        return res.send(results);
    });

    app.get("/users/:id/ownProjects", testingMode ? passUnauthenticated : ensureAuthenticated, async function (req: Request, res: Response) {
        const results = await usersRepository.findOne(req.params.id, {relations: ["ownProjects"]});
        return res.send(results.ownProjects);
    });

    app.get("/users/:id/invitedToProjects", testingMode ? passUnauthenticated : ensureAuthenticated, async function (req: Request, res: Response) {
        const results = await usersRepository.findOne(req.params.id, {relations: ["invitedToProjects"]});
        return res.send(results.invitedToProjects);
    });

    app.get("/users/:id/relatedProjects", testingMode ? passUnauthenticated : ensureAuthenticated, async function (req: Request, res: Response) {
        const author = await usersRepository.findOne(req.params.id, {relations: ["ownProjects", "invitedToProjects"]});
        const resultsOwn = await usersRepository.findOne(req.params.id, {relations: ["ownProjects", "invitedToProjects"]});
        const projects = resultsOwn.ownProjects.concat(resultsOwn.invitedToProjects);
        projects.forEach(project => project.owner = author)
        return res.send(projects);
    });


    app.post("/users", testingMode ? passUnauthenticated : ensureAuthenticated, async function (req: Request, res: Response) {
        const User = await usersRepository.create(req.body);
        const results = await usersRepository.save(User);
        return res.send(results);
    });

    app.put("/users/:id", testingMode ? passUnauthenticated : ensureAuthenticated, async function (req: Request, res: Response) {
        const User = await usersRepository.findOne(req.params.id);
        usersRepository.merge(User, req.body);
        const results = await usersRepository.save(User);
        return res.send(results);
    });

    app.delete("/users/:id", testingMode ? passUnauthenticated : ensureAuthenticated, async function (req: Request, res: Response) {
        await usersRepository.delete(req.params.id);
        return res.status(204).send();
    });
}
