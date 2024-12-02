import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Movie } from "../types";

interface MoviePageProps {
  movies: Movie[];
}

const MoviePage = ({ movies }: MoviePageProps) => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    if (id) {
      // Assurez-vous de comparer les IDs de manière appropriée
      const foundMovie = movies.find((movie) => movie.id.toString() === id);
      setMovie(foundMovie || null);
    }
  }, [id, movies]);

  if (!movie) {
    return <h1>Movie not found</h1>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Director: {movie.director}</p>
      <p>Duration: {movie.duration} minutes</p>
      {movie.imageUrl && <img src={movie.imageUrl} alt={movie.title} />}
      {movie.description && <p>{movie.description}</p>}
      {movie.budget && <p>Budget: ${movie.budget} million</p>}
    </div>
  );
};

export default MoviePage;
