import { Application, Request, Response } from "express";
import { Connection } from "typeorm";
import { Change } from "../entity/Change";


export function changeRoutes(app: Application, connection: Connection) {
    const changesReprository = connection.getRepository(Change);

    app.get("/changes", async function (req: Request, res: Response) {
        const changes = await changesReprository.find();
        res.json(changes);
    });

    app.get("/changes/:id", async function (req: Request, res: Response) {
        const results = await changesReprository.findOne(req.params.id);
        return res.send(results);
    });

    app.post("/changes", async function (req: Request, res: Response) {
        const Work = await changesReprository.create(req.body);
        const results = await changesReprository.save(Work);
        return res.send(results);
    });

    app.put("/changes/:id", async function (req: Request, res: Response) {
        const Work = await changesReprository.findOne(req.params.id);
        changesReprository.merge(Work, req.body);
        const results = await changesReprository.save(Work);
        return res.send(results);
    });

    app.delete("/changes/:id", async function (req: Request, res: Response) {
        await changesReprository.delete(req.params.id);
        return res.status(204).send();
    });
}