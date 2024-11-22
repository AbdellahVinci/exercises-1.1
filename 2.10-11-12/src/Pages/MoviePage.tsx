import { useParams } from "react-router-dom";
import { Movie } from "../types";

interface MoviePageProps {
  movies: Movie[];
}

const MoviePage = ({ movies }: MoviePageProps) => {
  // Récupérer l'ID du film à partir des paramètres de l'URL
  const { id } = useParams<{ id: string }>();

  // Trouver le film correspondant à l'ID
  const movie = movies.find((movie) => movie.id === id);

  if (!movie) {
    return <h1>Movie not found</h1>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Director: {movie.director}</p>
      <p>Duration: {movie.duration} minutes</p>
      {movie.image && <img src={movie.image} alt={movie.title} />}
      {movie.description && <p>{movie.description}</p>}
      {movie.budget && <p>Budget: ${movie.budget} million</p>}
    </div>
  );
};

export default MoviePage;
