import { useNavigate } from "react-router-dom";
import MovieForm from "../MovieForm/MovieForm";

import { Movie } from "../types";

interface AddMoviePageProps {
  onAddMovie: (movie: Omit<Movie, "id">) => void; // On attend un film sans 'id'
}

const AddMoviePage = ({ onAddMovie }: AddMoviePageProps) => {
  const navigate = useNavigate();

  const handleAddMovie = (movie: Omit<Movie, "id">) => {  // Handle movie without 'id'
    console.log("Handling add movie:", movie);
    onAddMovie(movie);
    navigate("/movies");
  };

  return (
    <div>
      <h1>Ajouter un Nouveau Film</h1>
      <MovieForm onAddMovie={handleAddMovie} />
      
    </div>
  );
};

export default AddMoviePage;
