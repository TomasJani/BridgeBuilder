import {Application, Request, Response} from "express";
import {Connection} from "typeorm";
import {Project} from "../entity/Project";


export function projectRoutes(app: Application, connection: Connection): void {
    const projectRepository = connection.getRepository(Project);

    app.get("/projects", async function (req: Request, res: Response) {
        const projects = await projectRepository.find();
        res.json(projects);
    });

    app.get("/projects/:id", async function (req: Request, res: Response) {
        const results = await projectRepository.findOne(req.params.id);
        return res.send(results);
    });

    app.get("/projects/:id/works", async function (req: Request, res: Response) {
        const results = await projectRepository.findOne(req.params.id, {relations: ["works"]});
        return res.send(results.works);
    });


    app.get("/projects/:id/owner", async function (req: Request, res: Response) {
        const results = await projectRepository.findOne(req.params.id, {relations: ["owner"]});
        return res.send(results.owner);
    });

    app.get("/projects/:id/invitedUsers", async function (req: Request, res: Response) {
        const results = await projectRepository.findOne(req.params.id, {relations: ["invitedUsers"]});
        return res.send(results.invitedUsers);
    });

    app.post("/projects/:id/:userId", async function (req: Request, res: Response) {
        const results = await projectRepository
            .createQueryBuilder()
            .relation(Project, "invitedUsers")
            .of(req.params.id)
            .add(req.params.userId);

        return res.send(results);
    });

    app.post("/projects", async function (req: Request, res: Response) {
        const Project = await projectRepository.create(req.body);
        const results = await projectRepository.save(Project);
        return res.send(results);
    });

    app.put("/projects/:id", async function (req: Request, res: Response) {
        const Project = await projectRepository.findOne(req.params.id);
        projectRepository.merge(Project, req.body);
        const results = await projectRepository.save(Project);
        return res.send(results);
    });

    app.delete("/projects/:id", async function (req: Request, res: Response) {
        await projectRepository.delete(req.params.id);
        return res.status(204).send();
    });
}