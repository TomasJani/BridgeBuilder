import { Application, Request, Response } from "express";
import { getConnection } from "typeorm";
import { Project } from "../entity/Project";
import { Work } from "../entity/Work";
import { Change } from "../entity/Change";


export function projectRoutes(app: Application): void {
    const projectRepository = getConnection().getRepository(Project);

    app.get("/projects", async function (req: Request, res: Response) {
        const projects = await projectRepository.find();
        res.json(projects);
    });

    app.get("/projects/:id", async function (req: Request, res: Response) {
        const results = await projectRepository.findOne(req.params.id);
        return res.send(results);
    });

    app.get("/projects/:id/works", async function (req: Request, res: Response) {
        const results = await projectRepository.findOne(req.params.id, { relations: ["works"] });

        results.works = await Promise.all(results.works.map(async (work) => addAuthorToWork(work)))
        results.works = await Promise.all(results.works.map(async (work) => addLatestChange(work)))

        return res.send(results.works);
    });

    app.get("/projects/:id/changes", async function (req: Request, res: Response) {
        const results = await projectRepository.findOne(req.params.id, { relations: ["works"] });

        results.works = await Promise.all(results.works.map(async (work) => addChanges(work)))
        let changes = [];
        results.works.forEach(work => {
            work.changes.forEach(change => { changes.push(change) })
        })
        changes = await Promise.all(changes.map(async (change) => addAuthorToChange(change)))
        return res.send(changes);
    });

    app.get("/projects/:id/owner", async function (req: Request, res: Response) {
        const results = await projectRepository.findOne(req.params.id, { relations: ["owner"] });
        return res.send(results.owner);
    });

    app.get("/projects/:id/invitedUsers", async function (req: Request, res: Response) {
        const results = await projectRepository.findOne(req.params.id, { relations: ["invitedUsers"] });
        return res.send(results.invitedUsers);
    });

    app.post("/projects/:id/invitedUsers/:userId", async function (req: Request, res: Response) {
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

    async function addAuthorToWork(work: Work) {
        work.author = await getConnection()
            .createQueryBuilder()
            .relation(Work, "author")
            .of(work)
            .loadOne();
        return work;
    }

    async function addAuthorToChange(change: Change) {
        change.author = await getConnection()
            .createQueryBuilder()
            .relation(Change, "author")
            .of(change)
            .loadOne();
        return change;
    }

    async function addChanges(work: Work) {
        work.changes = await getConnection()
            .createQueryBuilder()
            .relation(Work, "changes")
            .of(work)
            .loadMany();
        return work;
    }

    async function addLatestChange(work: Work) {
        work.changes = await getConnection()
            .createQueryBuilder()
            .relation(Work, "changes")
            .of(work)
            .loadMany();
        work.changes.sort(function (a, b) {
            if (Date.parse(a.created) > Date.parse(b.created)) {
                return -1;
            }
            if (Date.parse(a.created) < Date.parse(b.created)) {
                return 1;
            }
            return 0;
        });
        work.changes = [work.changes[0]];
        return work;
    }
}