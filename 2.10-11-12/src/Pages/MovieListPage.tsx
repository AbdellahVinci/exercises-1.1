import MovieList from "../MovieList/MovieList";

import { Movie } from "../types";
import Footer from "../Footer/Footer";

interface MovieListPageProps {
  movies: Movie[];
  onAddMovie: (movie: Movie) => void;
}

const MovieListPage = ({ movies }: MovieListPageProps) => (
  <div>
    <h1>Mes Films Préférés</h1>
    <MovieList movies={movies} />
    
     {/* Footer ajouté à la page d'accueil */}
     <Footer logoUrl="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" children={undefined} />
      <p>© 2024 Mon Application</p>
        <p>Contactez-nous pour plus d'informations</p>
  </div>
);

export default MovieListPage;
