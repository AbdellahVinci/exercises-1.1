"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const films_1 = __importDefault(require("./routes/films"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
let getRequestCounter = 0;
// Middleware pour compter les requêtes GET
// @ts-ignore
const requestCounterMiddleware = (req, res, next) => {
    if (req.method === 'GET') {
        getRequestCounter++;
        console.log(`GET counter: ${getRequestCounter}`);
    }
    next();
};
// Ajout du middleware à toutes les routes
app.use(requestCounterMiddleware);
// Utilisation du routeur pour /films
app.use("/films", films_1.default);
exports.default = app;
