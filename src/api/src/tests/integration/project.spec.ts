import supertest from "supertest";
import {cleanDB, makeTestApp} from "../misc/testUtils";
import {loadData} from "../misc/loadData";
import {ReasonPhrases, StatusCodes} from "http-status-codes";
import {Application} from "express";
import {Connection} from "typeorm/index";

describe("Testing the project API", () => {
    let app: Application;
    let connection: Connection;

    it("Gets all projects", async () => {
        // act
        const {status, body} = await supertest(app).get('/projects');

        // assert
        expect(status).toBe(StatusCodes.OK);
        expect(body.length).toBe(1)
        expect(body[0].name).toBe("Gbelany bridge");
    });

    it("Returns error response on non existing project", async () => {
        // act
        const {status, body} = await supertest(app).get(`/projects/250`);

        // assert
        expect(status).toBe(StatusCodes.NOT_FOUND);
        expect(body.error).toBe(ReasonPhrases.NOT_FOUND);
    });

    it("Gets first project", async () => {
        // act
        const {status, body} = await supertest(app).get(`/projects/1`);

        // assert
        expect(status).toBe(StatusCodes.OK);
        expect(body.name).toBe("Gbelany bridge");
    });

    it("Gets works of first project", async () => {
        // act
        const {status, body} = await supertest(app).get(`/projects/1/works`);

        // assert
        expect(status).toBe(StatusCodes.OK);
        expect(body.length).toBe(1);
        expect(body[0].id).toBe(1)
        expect(body[0].content).toBe("Build a funckig bridge.");
        expect(body[0].author.username).toBe("Michal Michalis");
        expect(body[0].changes.length).toBe(1)
        expect(body[0].changes[0].id).toBe(1)
        expect(body[0].changes[0].content).toBe("Build awesome bridge.")
    });

    it("Gets works of non existing project", async () => {
        // act
        const {status, body} = await supertest(app).get(`/projects/132/works`);

        // assert
        expect(status).toBe(StatusCodes.NOT_FOUND);
        expect(body.error).toBe(ReasonPhrases.NOT_FOUND);
    });

    it("Gets changes of first project", async () => {
        // act
        const {status, body} = await supertest(app).get(`/projects/1/changes`);

        // assert
        expect(status).toBe(StatusCodes.OK);
        expect(body.length).toBe(1);
        expect(body[0].id).toBe(1)
        expect(body[0].name).toBe("Update profanities.");
        expect(body[0].author.id).toBe(2);
        expect(body[0].author.username).toBe("Tomas Tomasic");
    });

    it("Gets owner of first project", async () => {
        // act
        const {status, body} = await supertest(app).get(`/projects/1/owner`);

        // assert
        expect(status).toBe(StatusCodes.OK);
        expect(body.id).toBe(2)
        expect(body.username).toBe("Tomas Tomasic");
    });

    it("Gets invited users of first project", async () => {
        // act
        const {status, body} = await supertest(app).get(`/projects/1/invitedUsers`);

        // assert
        expect(status).toBe(StatusCodes.OK);
        expect(body.length).toBe(1)
        expect(body[0].id).toBe(1)
        expect(body[0].username).toBe("Michal Michalis");
    });

    // TODO: Add remaining tests
    // it("Name of test case", async () => {
    //     // arrange (if it's needed)
    //     // act
    //     // assert
    // });


    beforeEach(async () => {
        [app, connection] = await makeTestApp()
        await loadData(connection);
    })

    afterEach(async () => {
        await cleanDB(connection)
        await connection.close();
    });
});
