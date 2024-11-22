import { Movie } from "../types";
import { Link } from "react-router-dom";
import './HomePage.css'; 

import Footer from "../Footer/Footer";

interface HomePageProps {
  movies: Movie[];
}

const HomePage = ({ movies }: HomePageProps) => {
  return (
    <div className="homepage">
      <h1>My Favorite Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>

          </li>
        ))}
      </ul>
      <Footer logoUrl="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg">
        <p>© 2024 Mon Application</p>
        <p>Contactez-nous pour plus d'informations</p>
      </Footer>
    </div>
  );
};

export default HomePage;
