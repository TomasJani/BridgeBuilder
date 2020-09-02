import {Application, Request, Response} from "express";
import {getConnection} from "typeorm";
import {Change} from "../entity/Change";
import {ensureAuthenticated, passUnauthenticated} from "../config/passport";


export function changeRoutes(app: Application, testingMode): void {
    const changesRepository = getConnection().getRepository(Change);

    app.get("/changes", testingMode ? passUnauthenticated : ensureAuthenticated, async function (req: Request, res: Response) {
        const changes = await changesRepository.find();
        return res.send(changes);
    });

    app.get("/changes/:id", testingMode ? passUnauthenticated : ensureAuthenticated, async function (req: Request, res: Response) {
        const results = await changesRepository.findOne(req.params.id, {relations: ["author", "work", "work.project"]});
        return res.send(results);
    });

    app.get("/changes/:id/author", testingMode ? passUnauthenticated : ensureAuthenticated, async function (req: Request, res: Response) {
        const results = await changesRepository.findOne(req.params.id, {relations: ["author"]});
        return res.send(results.author);
    });

    app.get("/changes/:id/work", testingMode ? passUnauthenticated : ensureAuthenticated, async function (req: Request, res: Response) {
        const results = await changesRepository.findOne(req.params.id, {relations: ["work"]});
        return res.send(results.work);
    });

    app.post("/changes", testingMode ? passUnauthenticated : ensureAuthenticated, async function (req: Request, res: Response) {
        const Work = await changesRepository.create(req.body);
        const results = await changesRepository.save(Work);
        return res.send(results);
    });

    app.put("/changes/:id", testingMode ? passUnauthenticated : ensureAuthenticated, async function (req: Request, res: Response) {
        const Work = await changesRepository.findOne(req.params.id, {relations: ["work", "author"]});
        changesRepository.merge(Work, req.body);
        const results = await changesRepository.save(Work);
        return res.send(results);
    });

    app.delete("/changes/:id", testingMode ? passUnauthenticated : ensureAuthenticated, async function (req: Request, res: Response) {
        await changesRepository.delete(req.params.id);
        return res.status(204).send();
    });
}
