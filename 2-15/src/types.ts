interface Movie {
  id: number; // L'id est obligatoire dans Movie
  title: string;
  director: string;
  duration: number;
  budget?: number;
  description?: string;
  imageUrl?: string;
}

// MovieContext : liste des films et la fonction pour en ajouter un
interface MovieContext {
  movies: Movie[];
  onMovieAdded: (newMovie: NewMovie) => void; // Nouvelle fonction qui accepte NewMovie sans id
}

// NewMovie : type qui exclut l'`id` de Movie
type NewMovie = Omit<Movie, "id">;

// Export des types
export type { Movie, MovieContext, NewMovie };
