import {Application, Request, Response} from "express";
import {getConnection} from "typeorm";
import {Work} from "../entity/Work";
import {Change} from "../entity/Change";
import {ensureAuthenticated, passUnauthenticated} from "../config/passport";


export function workRoutes(app: Application, testingMode): void {
    const workRepository = getConnection().getRepository(Work);

    async function addAuthor(change: Change): Promise<Change> {
        change.author = await getConnection()
            .createQueryBuilder()
            .relation(Change, "author")
            .of(change)
            .loadOne();
        return change;
    }

    app.get("/works", testingMode ? passUnauthenticated : ensureAuthenticated, async function (req: Request, res: Response) {
        const works = await workRepository.find();
        res.json(works);
    });

    app.get("/works/:id", testingMode ? passUnauthenticated : ensureAuthenticated, async function (req: Request, res: Response) {
        const results = await workRepository.findOne(req.params.id, {relations: ["author"]});
        return res.send(results);
    });

    app.get("/works/:id/changes", testingMode ? passUnauthenticated : ensureAuthenticated, async function (req: Request, res: Response) {
        const results = await workRepository.findOne(req.params.id, {relations: ["changes"]});

        results.changes = await Promise.all(results.changes.map(async (change) => addAuthor(change)))
        return res.send(results.changes);
    });

    app.get("/works/:id/project", testingMode ? passUnauthenticated : ensureAuthenticated, async function (req: Request, res: Response) {
        const results = await workRepository.findOne(req.params.id, {relations: ["project"]});
        return res.send(results.project);
    });

    app.get("/works/:id/author", testingMode ? passUnauthenticated : ensureAuthenticated, async function (req: Request, res: Response) {
        const results = await workRepository.findOne(req.params.id, {relations: ["author"]});
        return res.send(results.author);
    });

    app.post("/works", testingMode ? passUnauthenticated : ensureAuthenticated, async function (req: Request, res: Response) {
        const Work = await workRepository.create(req.body);
        const result = await workRepository.save(Work);
        return res.send(result);
    });

    app.put("/works/:id", testingMode ? passUnauthenticated : ensureAuthenticated, async function (req: Request, res: Response) {
        const Work = await workRepository.findOne(req.params.id);
        workRepository.merge(Work, req.body);
        const results = await workRepository.save(Work);
        return res.send(results);
    });

    app.delete("/works/:id", testingMode ? passUnauthenticated : ensureAuthenticated, async function (req: Request, res: Response) {
        await workRepository.delete(req.params.id);
        return res.status(204).send();
    });
}
