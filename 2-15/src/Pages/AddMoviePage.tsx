import { useNavigate } from "react-router-dom";
import MovieForm from "../MovieForm/MovieForm";
import Footer from "../Footer/Footer";
import { Movie } from "../types";

interface AddMoviePageProps {
  onAddMovie: (movie: Movie) => void;
}

const AddMoviePage = ({ onAddMovie }: AddMoviePageProps) => {
  const navigate = useNavigate();

  const handleAddMovie = (movie: Movie) => {
    console.log("Handling add movie:", movie);
    onAddMovie(movie);
    navigate("/movies"); // Redirection vers MovieListPage après l'ajout
  };

  return (
    <div>
      <h1>Ajouter un Nouveau Film</h1>
      <MovieForm onAddMovie={handleAddMovie} />
      <Footer logoUrl="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" children={undefined} />
    </div>
  );
};

export default AddMoviePage;