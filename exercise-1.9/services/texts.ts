// src/services/texts.ts
import { TypingText } from "../types";
import { v4 as uuidv4 } from "uuid";
import path from "node:path";
import { serialize, parse } from "../utils/json";


uuidv4();
const jsonDbPath = path.join(__dirname, "/../data/texts.json");

// Textes par défaut
const defaultTexts: TypingText[] = [
  { id: 1, content: "This is an easy typing text.", level: "easy" },
  { id: 2, content: "This is a medium typing text.", level: "medium" },
  { id: 3, content: "This is a hard typing text.", level: "hard" },
];

// Fonction pour lire tous les textes
export const readAllTexts = (): TypingText[] => {
  return parse(jsonDbPath, defaultTexts);
};



 // Fonction pour lire un texte par ID
export const readTextById = (id: number): TypingText | undefined => {
  const texts = readAllTexts();
  return texts.find((text) => text.id === id);
};

export const deleteOne = (id: number):  TypingText | undefined => {
  const texts = parse(jsonDbPath, defaultTexts);

  const index = texts.findIndex((text) => text.id === id);

  if (index === -1) {
    return undefined;
  }

  const [text] = texts.splice(index, 1);
  serialize(jsonDbPath, texts);

  return text;
};
export const readAll = (level: string | undefined = undefined): TypingText[] => {
  const texts = parse(jsonDbPath, defaultTexts);
  return level ? texts.filter((text) => text.level === level) : texts;
};

