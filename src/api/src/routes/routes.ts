import { Application } from "express"
import * as bodyParser from "body-parser";
import * as cors from "cors"

export function routes(app: Application, port: String) {
    app.use(bodyParser.json());
    app.use(cors());
    app.listen(port, function () {
        console.log(`App is listening on port ${port}`);
    });
}
