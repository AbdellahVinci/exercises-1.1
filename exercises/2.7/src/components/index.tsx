import { useState } from "react";
import { Movie } from "../types";
import Header from "../Header/Header";
import PageTitle from "../PageTitle/PageTitle";
import MovieList from "../MovieList/MovieList";

import MovieForm from "../MovieForm/MovieForm";
import Footer from "../Footer/Footer";

const App = () => {
    const [movies, setMovies] = useState<Movie[]>([
      { title: "Inception", director: "Christopher Nolan", duration: 148 },
      { title: "The Matrix", director: "Wachowski Sisters", duration: 136 },
      { title: "Interstellar", director: "Christopher Nolan", duration: 169 },
      { title: "The Shawshank Redemption", director: "Frank Darabont", duration: 142 },
      { title: "Pulp Fiction", director: "Quentin Tarantino", duration: 154 }
    ]);
  
    const addMovie = (movie: Movie) => {
      setMovies([...movies, movie]);
    };

   return(
    <div style={{ padding: "20px" }}>
    <Header/>
    <PageTitle title="My movies"/>
    <MovieList movies={movies}/>
    <PageTitle title="Add a New Movie" />
    <MovieForm onAddMovie={addMovie}/>
    <Footer/>
    </div>

   );
};
   
   export default App;