"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrCreateOne = exports.updateOne = exports.deleteOne = exports.createOne = exports.readOne = exports.readAll = void 0;
const node_path_1 = __importDefault(require("node:path"));
const json_1 = require("../utils/json");
const jsonDbPath = node_path_1.default.join(__dirname, "/../data/films.json");
const defaultFilms = [
    {
        id: 1,
        title: "Shang-Chi and the Legend of the Ten Rings",
        director: "Destin Daniel Cretton",
        duration: 132,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg",
        description: "Shang-Chi, the master of unarmed weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.",
        budget: 150,
    },
    {
        id: 2,
        title: "The Matrix",
        director: "Lana Wachowski, Lilly Wachowski",
        duration: 136,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        budget: 63,
    },
    {
        id: 3,
        title: "Summer Wars",
        director: "Mamoru Hosoda",
        duration: 114,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/7d/Summer_Wars_poster.jpg",
        description: "A young math genius solves a complex equation and inadvertently puts a virtual world's artificial intelligence in a position to destroy Earth.",
        budget: 18.7,
    },
    {
        id: 4,
        title: "The Meyerowitz Stories",
        director: "Noah Baumbach",
        duration: 112,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/a/af/The_Meyerowitz_Stories.png",
        description: "An estranged family gathers together in New York City for an event celebrating the artistic work of their father.",
    },
    {
        id: 5,
        title: "her",
        director: "Spike Jonze",
        duration: 126,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/44/Her2013Poster.jpg",
        description: "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
        budget: 23,
    },
];
const readAll = (minimumDuration = undefined) => {
    const films = (0, json_1.parse)(jsonDbPath, defaultFilms);
    return minimumDuration
        ? films.filter((film) => film.duration >= minimumDuration)
        : films;
};
exports.readAll = readAll;
const readOne = (id) => {
    const films = (0, json_1.parse)(jsonDbPath, defaultFilms);
    return films.find((film) => film.id === id);
};
exports.readOne = readOne;
const createOne = (newFilm) => {
    const films = (0, json_1.parse)(jsonDbPath, defaultFilms);
    const existingFilm = films.find((film) => film.title.toLowerCase() === newFilm.title.toLowerCase() &&
        film.director.toLowerCase() === newFilm.director.toLowerCase());
    if (existingFilm) {
        return undefined;
    }
    const film = Object.assign({ id: nextId() }, newFilm);
    films.push(film);
    (0, json_1.serialize)(jsonDbPath, films);
    return film;
};
exports.createOne = createOne;
const deleteOne = (id) => {
    const films = (0, json_1.parse)(jsonDbPath, defaultFilms);
    const index = films.findIndex((film) => film.id === id);
    if (index === -1) {
        return undefined;
    }
    const [film] = films.splice(index, 1);
    (0, json_1.serialize)(jsonDbPath, films);
    return film;
};
exports.deleteOne = deleteOne;
const updateOne = (id, updatedFilm) => {
    const films = (0, json_1.parse)(jsonDbPath, defaultFilms);
    const index = films.findIndex((film) => film.id === id);
    if (index === -1) {
        return undefined;
    }
    const film = Object.assign(Object.assign({}, films[index]), updatedFilm);
    films[index] = film;
    (0, json_1.serialize)(jsonDbPath, films);
    return film;
};
exports.updateOne = updateOne;
const updateOrCreateOne = (id, updatedFilm) => {
    const films = (0, json_1.parse)(jsonDbPath, defaultFilms);
    const index = films.findIndex((film) => film.id === id);
    if (index === -1) {
        return createOne(updatedFilm);
    }
    const film = Object.assign(Object.assign({}, films[index]), updatedFilm);
    films[index] = film;
    (0, json_1.serialize)(jsonDbPath, films);
    return film;
};
exports.updateOrCreateOne = updateOrCreateOne;
const nextId = () => (0, json_1.parse)(jsonDbPath, defaultFilms).reduce((maxId, film) => Math.max(maxId, film.id), 0) + 1;
