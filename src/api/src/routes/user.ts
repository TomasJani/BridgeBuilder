import {Application, Request, Response} from "express";
import {Connection} from "typeorm";
import {User} from "../entity/User";


export function userRoutes(app: Application, connection: Connection): void {
    const usersRepository = connection.getRepository(User);

    app.get("/users", async function (req: Request, res: Response) {
        const users = await usersRepository.find();
        res.json(users);
    });

    app.get("/users/:id", async function (req: Request, res: Response) {
        const results = await usersRepository.findOne(req.params.id);
        return res.send(results);
    });

    app.get("/users/:id/ownProjects", async function (req: Request, res: Response) {
        const results = await usersRepository.findOne(req.params.id, {relations: ["ownProjects"]});
        return res.send(results.ownProjects);
    });

    app.get("/users/:id/invitedToProjects", async function (req: Request, res: Response) {
        const results = await usersRepository.findOne(req.params.id, {relations: ["invitedToProjects"]});
        return res.send(results.invitedToProjects);
    });

    app.post("/users", async function (req: Request, res: Response) {
        const User = await usersRepository.create(req.body);
        const results = await usersRepository.save(User);
        return res.send(results);
    });

    app.put("/users/:id", async function (req: Request, res: Response) {
        const User = await usersRepository.findOne(req.params.id);
        usersRepository.merge(User, req.body);
        const results = await usersRepository.save(User);
        return res.send(results);
    });

    app.delete("/users/:id", async function (req: Request, res: Response) {
        await usersRepository.delete(req.params.id);
        return res.status(204).send();
    });
}