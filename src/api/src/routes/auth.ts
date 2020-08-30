import {Application, Request, Response} from "express";
import passport from "passport";
import {ensureAuthenticated} from "../config/passport";

export function authRoutes(app: Application): void {
    const clientBaseUrl = process.env.CLIENT_BASE_URL;

    app.get('/auth/google',
        passport.authenticate('google', {
            scope: ["https://www.googleapis.com/auth/plus.login"]
        },));

    app.get('/auth/google/callback',
        passport.authenticate('google', {
            failureRedirect: `${clientBaseUrl}/`,
            successRedirect: `${clientBaseUrl}/projects`
        }));

    app.get("/auth/getUser", (req: Request, res: Response) =>
        (req.user === undefined) ? res.status(403).send() : res.send(req.user)
    );

    app.get("/logout", ensureAuthenticated, (req: Request, res: Response) => {
        req.logout();
        req.session = {};
        res.redirect(`${clientBaseUrl}/`);
    });
}
