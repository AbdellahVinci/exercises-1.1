import express from "express";
import pizzaRouter from "./routes/films";
import textsRouter from './routes/texts';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let getRequestCounter = 0;

// Middleware pour compter les requêtes GET
// @ts-ignore
const requestCounterMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (req.method === 'GET') {
        getRequestCounter++;
        console.log(`GET counter: ${getRequestCounter}`);
    }
    next();
};


// Ajout du middleware à toutes les routes
app.use(requestCounterMiddleware);

// Utilisation du routeur pour /films
app.use("/films", pizzaRouter);
app.use('/texts', textsRouter);

export default app;
