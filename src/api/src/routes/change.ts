import {Application, Request, Response} from "express";
import {getConnection} from "typeorm";
import {Change} from "../entity/Change";
import {ensureAuthenticated} from "../config/passport";


export function changeRoutes(app: Application): void {
    const changesRepository = getConnection().getRepository(Change);

    app.get("/changes", ensureAuthenticated, async function (req: Request, res: Response) {
        const changes = await changesRepository.find();
        res.json(changes);
    });

    app.get("/changes/:id", ensureAuthenticated, async function (req: Request, res: Response) {
        const results = await changesRepository.findOne(req.params.id);
        return res.send(results);
    });

    app.get("/changes/:id/author", ensureAuthenticated, async function (req: Request, res: Response) {
        const results = await changesRepository.findOne(req.params.id, {relations: ["author"]});
        return res.send(results.author);
    });

    app.get("/changes/:id/work", ensureAuthenticated, async function (req: Request, res: Response) {
        const results = await changesRepository.findOne(req.params.id, {relations: ["work"]});
        return res.send(results.work);
    });

    app.post("/changes", ensureAuthenticated, async function (req: Request, res: Response) {
        const Work = await changesRepository.create(req.body);
        const results = await changesRepository.save(Work);
        return res.send(results);
    });

    app.put("/changes/:id", ensureAuthenticated, async function (req: Request, res: Response) {
        const Work = await changesRepository.findOne(req.params.id);
        changesRepository.merge(Work, req.body);
        const results = await changesRepository.save(Work);
        return res.send(results);
    });

    app.delete("/changes/:id", ensureAuthenticated, async function (req: Request, res: Response) {
        await changesRepository.delete(req.params.id);
        return res.status(204).send();
    });
}