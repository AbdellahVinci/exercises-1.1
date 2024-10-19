"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readAllTexts = void 0;
// Exemple de données
const texts = [
    { id: "1", content: "This is an easy typing text.", level: "easy" },
    { id: "2", content: "This is a medium typing text.", level: "medium" },
    { id: "3", content: "This is a hard typing text.", level: "hard" },
];
// Fonction pour lire tous les textes
const readAllTexts = () => {
    return texts;
};
exports.readAllTexts = readAllTexts;
