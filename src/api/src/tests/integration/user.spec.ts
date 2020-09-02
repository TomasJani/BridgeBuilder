import supertest from "supertest";
import {cleanDB, makeTestApp} from "../misc/testUtils";
import {loadData} from "../misc/loadData";

// NOTE: DB is filled with data from loadData.ts

describe("Testing the user API", () => {
    let app;
    let connection;

    it("Gets all users", async () => {
        const response = await supertest(app).get('/users');
        return expect(response.status).toBe(200);
    });

    // TODO: Add remaining tests
    // it("Name of test case", async () => {
    //     // arrange (if it's needed)
    //     // act
    //     // assert
    // });

    beforeEach(async () => {
        [app, connection] = await makeTestApp();
        await loadData(connection);
    })

    afterEach(async () => {
        await cleanDB(connection);
        await connection.close();
    });
});
