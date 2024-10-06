import { Router } from "express";
import path from "node:path";
import { Film,NewFilm } from "../types";
import { containsOnlyExpectedKeys } from "../utils/validate";
import { parse, serialize } from "../utils/json";
const jsonDbPath = path.join(__dirname, "/../data/films.json");
const router = Router();



const defaultFilms: Film[] = [
    {
      id: 1,
      title: "Rabat",
      director : "Victor Ponten",
      duration : 105,
      budget:300000,
      description:"Les trois amis Nadiir (Nasrdin Dchar), Abdel (Achmed Akkabi) et Zakaria (Marwan Kenzari) habitent aux Pays-Bas. Nadir et Abdel sont d'origine marocaine et Zakaria d'origine tunisienne. Les trois jeunes ont comme plan de créer leur société. Le père de Nadir offre à son fils un ancien taxi qu'il doit ramener à Rabat",
      imageUrl:"https://fr.web.img4.acsta.net/r_1920_1080/pictures/13/12/26/17/26/420878.jpg",
    },

    {
        id: 2,
        title: "the extraction 2",
        director : "Sam Hargrave",
        duration : 90,
        budget:70000000,
        description:"Synopsis. Après avoir miraculeusement survécu aux événements du premier volet, le mercenaire australien des forces spéciales Tyler Rake est de retour pour une nouvelle mission périlleuse : extraire de prison la famille martyrisée d'un impitoyable gangster géorgien",
        imageUrl:"https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQR--51djRo3BkQ6B6bz2yYMN9ttc36SkZJ_xNVyhZJrAG4ziBDo8ZeefXhNyPZlrYpIJNN9Dfg63LINRdEZQJ10bkPsox3Z0h2CfKoIB5opVXLU-JFoDvznmaGUiSGImZZrmsOxS4K8m6_pAPlRPxqrN.jpg?r=052",
      },

      {
        id: 3,
        title: "Papillon",
        director : "Michael Noer",
        duration : 133,
        budget:7000000,
        description:"Synopsis. Après avoir miraculeusement survécu aux événements du premier volet, le mercenaire australien des forces spéciales Tyler Rake est de retour pour une nouvelle mission périlleuse : extraire de prison la famille martyrisée d'un impitoyable gangster géorgien",
        imageUrl:"https://m.media-amazon.com/images/I/71ANzmVG8XL._SL1500_.jpg",
      },  

    

];
  const expectedKeys = [
  "title",
  "director",
  "duration",
  "budget",
  "description",
  "imageUrl",
  ];


router.get("/", (req, res) => {
  const title = req.query.title ? String(req.query.title) : "";
  const durationMIN = Number(req.query["duration-min"]);
  const sort = req.query.sort; 
  

 
  let filteredFilms = [...defaultFilms];
  

  // Filter by title
  if (title.length > 0) {
    filteredFilms = filteredFilms.filter(film =>
      film.title.toLowerCase().startsWith(title.toLowerCase())
    );
  }

  // Filter by min-duration
  if (!isNaN(durationMIN) && durationMIN >= 0) {
    filteredFilms = filteredFilms.filter(film => film.duration >= durationMIN);
  }

  if(sort==="asc"){
    filteredFilms.sort((a, b) => a.duration - b.duration); 
    
   // decreasing sort
  }else if (sort ==="title"){
    filteredFilms.sort((a,b)=> a.title.localeCompare(b.title));
  }

  // Return filtered films
  return res.json(filteredFilms);
});

  



router.get("/:id", (req, res) => {
  const films = parse(jsonDbPath, defaultFilms);
  const id = Number(req.params.id);
  const film = films.find((film) => film.id === id);
 
 
  if (!film) {
    return res.sendStatus(404);
  }
  return res.json(film);
});
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const films = parse(jsonDbPath, defaultFilms);

  const index = films.findIndex((film) => film.id === id);
  if (index === -1) {
    return res.sendStatus(404);
  }
  const deletedElements = films.splice(index, 1); // splice() returns an array of the deleted elements
  serialize(jsonDbPath, films);
  return res.json(deletedElements[0]);
});






router.post("/", (req, res) => {
  const body: unknown = req.body;

  // Validation
  if (
      !body ||
      typeof body !== "object" ||
      !("title" in body) ||
      !("director" in body) ||
      !("duration" in body) ||
      !("budget" in body) ||
      !("description" in body) ||
      !("imageUrl" in body) ||
      typeof body.title !== "string" ||
      typeof body.director !== "string" ||
      typeof body.duration !== "number" ||
      typeof body.budget !== "number" ||
      typeof body.description !== "string" ||
      typeof body.imageUrl !== "string" ||
      !body.title.trim() ||
      !body.director.trim() ||
      body.duration <= 0 ||
      body.budget <= 0 ||
      !body.description.trim() ||
      !body.imageUrl.trim()
  ) {
      return res.sendStatus(400);
  }

  const { title, director, duration, budget, description, imageUrl } = body as NewFilm;

  const films = parse(jsonDbPath, defaultFilms);
  // Calculating the ID of the new movie
  const nextId =
      films.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) +
      1;

  // Create new movie
  const newFilm: Film = {
      id: nextId,  
      title,
      director,
      duration,
      budget,
      description,
      imageUrl,
  };
  if (films.some(film => film.title === newFilm.title)) {
    return res.sendStatus(404);
  }
  if (films.some(film=>film.director===newFilm.director)){
    return res.sendStatus(404);
  }
  

  // add new movie to the list
  films.push(newFilm);
  serialize(jsonDbPath, films);
  
  return res.json(newFilm);
});

// Update one or multiple props of a film
router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  const films = parse(jsonDbPath, defaultFilms);

  // Check if ID is a valid number
  if (isNaN(id)) {
    return res.sendStatus(400);
  }

  // Find the film by ID
  const filmToUpdate = films.find((film) => film.id === id);

  if (!filmToUpdate) {
    return res.sendStatus(404);
  }

  const body: unknown = req.body;

  // Validate incoming data
  if (
    !body ||
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
      (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.sendStatus(400);
  }

  // Ensure body contains only expected keys
  
  if (!containsOnlyExpectedKeys(body, expectedKeys)) {
    return res.sendStatus(400);
  }

  // Update the film
  const updatedFilm = { ...filmToUpdate, ...body };

  // Replace the old film with the updated one
  const filmIndex = films.indexOf(filmToUpdate);
  films[filmIndex] = updatedFilm;

  // Save updated films array to JSON file
  serialize(jsonDbPath, films);

  // Return the updated film
  return res.json(updatedFilm);
});


router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  
  const films = parse(jsonDbPath, defaultFilms);
  const existingFilmIndex = films.findIndex((film) => film.id === id);
  const film = films.find((film) => film.id === id);

  if (!film) {
    return res.sendStatus(404); // Film non trouvé
  }

  // Validation des données
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) || typeof body.title !== "string" || !body.title.trim() ||
    !("director" in body) || typeof body.director !== "string" || !body.director.trim() ||
    !("duration" in body) || typeof body.duration !== "number" || body.duration <= 0 ||
    !("budget" in body) || typeof body.budget !== "number" || body.budget <= 0 ||
    !("description" in body) || typeof body.description !== "string" || !body.description.trim() ||
    !("imageUrl" in body) || typeof body.imageUrl !== "string" || !body.imageUrl.trim()
  ) {
    return res.status(400).send("Invalid input data."); // Requête mal formée
  }

  const { title, director, duration, budget, description, imageUrl } = body as NewFilm;

  if (existingFilmIndex !== -1) {
    films[existingFilmIndex] = {
      id,
      title,
      director,
      duration,
      budget,
      description,
      imageUrl,
    };
    serialize(jsonDbPath, films); // Sauvegarder après la mise à jour
    return res.json(films[existingFilmIndex]); 
  }

  const newFilm: Film = {
    id,
    title,
    director,
    duration,
    budget,
    description,
    imageUrl,
  };

  films.push(newFilm);
  serialize(jsonDbPath, films); // Sauvegarder après l'ajout
  return res.status(201).json(newFilm); 
});

// Read all films




// Read all films


  
  export default router;