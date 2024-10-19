// src/routes/texts.ts
import { Router } from "express";

import { readTextById } from "../services/texts";
import { deleteOne  } from "../services/texts";
import { readAll } from "../services/texts";





const router = Router();
const expectedLevels = ["easy", "medium", "hard"];


router.get("/", (req, res) => {
  const level = req.query.level as string | undefined;

  if (level !== undefined && !expectedLevels.includes(level)) {
    return res.sendStatus(400);
  }

  const texts = readAll(level);
  return res.json(texts);
});


router.get("/:id", (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.sendStatus(400);
  }

  const text = readTextById (id);

  if (text === undefined) {
    return res.sendStatus(404);
  }

  return res.send(text);
});
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.sendStatus(400);
  }

  const deletedText = deleteOne(id);

  if (!deletedText) {
    return res.sendStatus(404);
  }

  return res.send(deletedText);
});

// Read all texts, filtered by level if the query param exists
router.get("/", (req, res) => {
  const level =
    "level" in req.query && typeof req.query["level"] === "string"
      ? req.query["level"]
      : undefined;

  if (level !== undefined && !expectedLevels.includes(level)) {
    return res.sendStatus(400);
  }

  const filteredTexts = readAll(level);

  return res.send(filteredTexts);
});

export default router;
