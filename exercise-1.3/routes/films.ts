import { Router } from "express";

import { Film,NewFilm } from "../types";

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




router.get("/", (req, res) => {
  const durationMIN = Number(req.query["duration-min"]);

    
    if (!req.query["duration-min"]) {
      return res.json(defaultFilms); 
  }

  
  if (isNaN(durationMIN) || durationMIN < 0) {
      return res.json([]); 
  }

  // filtred movies
  const filteredFilms = defaultFilms.filter((film) => film.duration >= durationMIN);
  
  // Return filtred movies
  return res.json(filteredFilms);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const film = defaultFilms.find((film) => film.id === id);
  if (!film) {
    return res.sendStatus(404);
  }
  return res.json(film);
});

router.post("/", (req, res) => {
  const body: unknown = req.body;

  // Validation des champs requis
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

  // Calculating the ID of the new movie
  const nextId =
      defaultFilms.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) +
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

  // add new movie to the list
  defaultFilms.push(newFilm);
  return res.json(newFilm);
});




   



// Read all films


  
  export default router;