import {Application, Request, Response} from "express";
import {Connection, getConnection} from "typeorm";
import {User} from "../entity/User";
import {ensureAuthenticated} from "../config/passport";


export function userRoutes(app: Application): void {
    const usersRepository = getConnection().getRepository(User);

    app.get("/users", ensureAuthenticated, async function (req: Request, res: Response) {
        const users = await usersRepository.find();
        res.json(users);
    });

    app.get("/users/:id", ensureAuthenticated, async function (req: Request, res: Response) {
        const results = await usersRepository.findOne(req.params.id);
        return res.send(results);
    });

    app.get("/users/:id/ownProjects", ensureAuthenticated, async function (req: Request, res: Response) {
        const results = await usersRepository.findOne(req.params.id, {relations: ["ownProjects"]});
        return res.send(results.ownProjects);
    });

    app.get("/users/:id/invitedToProjects", ensureAuthenticated, async function (req: Request, res: Response) {
        const results = await usersRepository.findOne(req.params.id, {relations: ["invitedToProjects"]});
        return res.send(results.invitedToProjects);
    });

    app.get("/users/:id/relatedProjects", ensureAuthenticated, async function (req: Request, res: Response) {
        const resultsOwn = await usersRepository.findOne(req.params.id, {relations: ["ownProjects"]});
        const resultsInvited = await usersRepository.findOne(req.params.id, {relations: ["invitedToProjects"]});
        return res.send(resultsOwn.ownProjects.concat(resultsInvited.invitedToProjects));
    });


    app.post("/users", ensureAuthenticated, async function (req: Request, res: Response) {
        const User = await usersRepository.create(req.body);
        const results = await usersRepository.save(User);
        return res.send(results);
    });

    app.put("/users/:id", ensureAuthenticated, async function (req: Request, res: Response) {
        const User = await usersRepository.findOne(req.params.id);
        usersRepository.merge(User, req.body);
        const results = await usersRepository.save(User);
        return res.send(results);
    });

    app.delete("/users/:id", ensureAuthenticated, async function (req: Request, res: Response) {
        await usersRepository.delete(req.params.id);
        return res.status(204).send();
    });
}