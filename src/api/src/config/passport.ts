import passport from "passport";
import {User} from "../entity/User";
import * as express from "express";
import {Application, NextFunction, Request, Response} from "express";
import {Connection} from "typeorm";
import {Profile, Strategy as GoogleStrategy, VerifyCallback} from "passport-google-oauth20";
import cookieParser from "cookie-parser";
import cookieSession from "cookie-session";
import * as bodyParser from "body-parser";
import * as path from "path";
import cors from "cors";


export async function setupPassport(app: Application, connection: Connection): Promise<void> {
    const userRepository = connection.getRepository(User);

    const corsOption = {
        origin: true,
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true
    };

    app.use(cors(corsOption));
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(
        cookieSession({
            name: "session",
            keys: [process.env.COOKIE_KEY],
            maxAge: 24 * 60 * 60 * 100
        })
    );

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(function (req: Request, res: Response, next: NextFunction) {
        res.header('Access-Control-Allow-Origin', "http://localhost:3000");
        res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
        if ('OPTIONS' == req.method) {
            res.send(200);
        }
        next();
    });

    passport.serializeUser(function (user: User, done: Function) {
        done(null, user.id);
    });

    passport.deserializeUser(async function (id: number, done: VerifyCallback) {
        const user = await userRepository.findOne(id);
        if (user) {
            done(null, user);
        } else {
            done(null, {});
        }
    });

    passport.use(new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL
        },
        async function (accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) {
            const user = await userRepository.findOne({googleId: profile.id})
            if (user) {
                done(null, user);
            } else {
                const newUser = await userRepository.create({
                    googleId: profile.id,
                    username: profile._json.name,
                    image: profile._json.picture,
                    created: new Date().toUTCString()
                });
                const results = await userRepository.save(newUser);
                done(null, results);
            }
        }
    ));
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction): void {
    if (req.isAuthenticated()) {
        return next();
    }
    //res.redirect('/login');
    res.status(401).json();
}
