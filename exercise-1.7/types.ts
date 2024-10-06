interface Film {
  id: number;
  title: string;
  director: string;
  duration: number;
  budget?: number;
  description?: string;
  imageUrl?: string;
}





// Type pour créer un nouveau Film sans l'ID
type NewFilm = Omit<Film, "id">;

// Exportation des types
export type { Film, NewFilm };
