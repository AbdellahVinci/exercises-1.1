
export interface Movie {

  id: string;

  title: string;

  director: string;

  duration: number;

  image?: string;

  description: string;

  budget?: number;

}


interface MovieContext {
  movies: Movie[];
  onMovieAdded: (newMovie: NewMovie) => void;
}

type NewMovie = Omit<Movie, "id">;

export type { MovieContext, NewMovie };