import { Router } from "express";

import { Film } from "../types";

const router = Router();

router.get("/", (_req, res) => {
  return res.json(defaultFilms);
});

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



// Read all films


  
  export default router;