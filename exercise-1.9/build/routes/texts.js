"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/texts.ts
const express_1 = require("express");
const texts_1 = require("../services/texts");
const router = (0, express_1.Router)();
// Route GET /texts
router.get("/", (_, res) => {
    const allTexts = (0, texts_1.readAllTexts)();
    return res.json(allTexts);
});
exports.default = router;
