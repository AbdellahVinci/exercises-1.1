"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validate_1 = require("../utils/validate");
const films_1 = require("../services/films");
const router = (0, express_1.Router)();
const expectedKeys = [
    "title",
    "director",
    "duration",
    "budget",
    "description",
    "imageUrl",
];
// Read all films, filtered by minimum-duration if the query param exists
router.get("/", (req, res) => {
    const minDuration = "minimum-duration" in req.query
        ? Number(req.query["minimum-duration"])
        : undefined;
    if (minDuration !== undefined && (isNaN(minDuration) || minDuration <= 0)) {
        return res.sendStatus(400);
    }
    const filteredFilms = (0, films_1.readAll)(minDuration);
    return res.send(filteredFilms);
});
// Read a film by id
router.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        return res.sendStatus(400);
    }
    const film = (0, films_1.readOne)(id);
    if (film === undefined) {
        return res.sendStatus(404);
    }
    return res.send(film);
});
// Create a new film
router.post("/", (req, res) => {
    const body = req.body;
    if (!body ||
        typeof body !== "object" ||
        !("title" in body) ||
        !("director" in body) ||
        !("duration" in body) ||
        typeof body.title !== "string" ||
        typeof body.director !== "string" ||
        typeof body.duration !== "number" ||
        !body.title.trim() ||
        !body.director.trim() ||
        body.duration <= 0 ||
        ("budget" in body &&
            (typeof body.budget !== "number" || body.budget <= 0)) ||
        ("description" in body &&
            (typeof body.description !== "string" || !body.description.trim())) ||
        ("imageUrl" in body &&
            (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))) {
        return res.sendStatus(400);
    }
    // Challenge of ex1.4 : To be complete, we should check that the keys of the body object are only the ones we expect
    if (!(0, validate_1.containsOnlyExpectedKeys)(body, expectedKeys)) {
        return res.sendStatus(400);
    }
    // End of challenge
    const newFilm = body;
    const addedFilm = (0, films_1.createOne)(newFilm);
    if (!addedFilm) {
        return res.sendStatus(409);
    }
    return res.json(addedFilm);
});
// Delete a film by id
router.delete("/:id", (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        return res.sendStatus(400);
    }
    const deletedFilm = (0, films_1.deleteOne)(id);
    if (!deletedFilm) {
        return res.sendStatus(404);
    }
    return res.send(deletedFilm);
});
// Update on or multiple props of a film
router.patch("/:id", (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        return res.sendStatus(400);
    }
    const body = req.body;
    if (!body ||
        typeof body !== "object" ||
        Object.keys(body).length === 0 ||
        ("title" in body &&
            (typeof body.title !== "string" || !body.title.trim())) ||
        ("director" in body &&
            (typeof body.director !== "string" || !body.director.trim())) ||
        ("duration" in body &&
            (typeof body.duration !== "number" || body.duration <= 0)) ||
        ("budget" in body &&
            (typeof body.budget !== "number" || body.budget <= 0)) ||
        ("description" in body &&
            (typeof body.description !== "string" || !body.description.trim())) ||
        ("imageUrl" in body &&
            (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))) {
        return res.sendStatus(400);
    }
    // Challenge of ex1.6 : To be complete, we should check that the keys of the body object are only the ones we expect
    if (!(0, validate_1.containsOnlyExpectedKeys)(body, expectedKeys)) {
        return res.sendStatus(400);
    }
    // End of challenge
    const updatedFilm = (0, films_1.updateOne)(id, body);
    if (!updatedFilm) {
        return res.sendStatus(404);
    }
    return res.send(updatedFilm);
});
// Update a film only if all properties are given or create it if it does not exist and the id is not existant
router.put("/:id", (req, res) => {
    const body = req.body;
    if (!body ||
        typeof body !== "object" ||
        !("title" in body) ||
        !("director" in body) ||
        !("duration" in body) ||
        typeof body.title !== "string" ||
        typeof body.director !== "string" ||
        typeof body.duration !== "number" ||
        !body.title.trim() ||
        !body.director.trim() ||
        body.duration <= 0 ||
        ("budget" in body &&
            (typeof body.budget !== "number" || body.budget <= 0)) ||
        ("description" in body &&
            (typeof body.description !== "string" || !body.description.trim())) ||
        ("imageUrl" in body &&
            (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))) {
        return res.sendStatus(400);
    }
    // Challenge of ex1.6 : To be complete, we should check that the keys of the body object are only the ones we expect
    if (!(0, validate_1.containsOnlyExpectedKeys)(body, expectedKeys)) {
        return res.sendStatus(400);
    }
    const id = Number(req.params.id);
    if (isNaN(id)) {
        return res.sendStatus(400);
    }
    const createdOrUpdatedFilm = (0, films_1.updateOrCreateOne)(id, body);
    if (!createdOrUpdatedFilm) {
        return res.sendStatus(409); // Film already exists
    }
    return res.send(createdOrUpdatedFilm);
});
exports.default = router;