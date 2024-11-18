import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Movie } from "./types";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import CinemaPage from "./Pages/CinemaPage";
import MovieListPage from "./Pages/MovieListPage";
import AddMoviePage from "./Pages/AddMoviePage";
import MoviePage from "./Pages/MoviePage"; // Importation de la MoviePage
import { v4 as uuidv4 } from "uuid"; // Utilisation de uuid pour générer des ids uniques

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([
    {
      id: uuidv4(), title: "Inception", director: "Christopher Nolan", duration: 148,
      image: "",
      description: ""
    },
    {
      id: uuidv4(), title: "The Matrix", director: "Wachowski Sisters", duration: 136,
      image: "",
      description: ""
    },
    {
      id: uuidv4(), title: "Interstellar", director: "Christopher Nolan", duration: 169,
      image: "",
      description: ""
    },
    {
      id: uuidv4(), title: "The Shawshank Redemption", director: "Frank Darabont", duration: 142,
      image: "",
      description: ""
    },
    {
      id: uuidv4(), title: "Pulp Fiction", director: "Quentin Tarantino", duration: 154,
      image: "",
      description: ""
    },
  ]);

  const addMovie = (movie: Movie) => {
    setMovies([...movies, { ...movie, id: uuidv4() }]); // Ajouter un id lors de l'ajout
  };

  return (
    <BrowserRouter>
      <div style={{ padding: "20px" }}>
        <Header logoUrl={""} children={undefined} />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage movies={movies} />} /> {/* Passer les films à la HomePage */}
          <Route path="/cinema" element={<CinemaPage />} />
          <Route path="/movies" element={<MovieListPage movies={movies} onAddMovie={addMovie} />} />
          <Route path="/add-movie" element={<AddMoviePage onAddMovie={addMovie} />} />
          <Route path="/movie/:id" element={<MoviePage movies={movies} />} /> {/* Route dynamique pour afficher un film */}
          <Route path="/" element={<HomePage movies={movies} />} />
          <Route path="/movie/:id" element={<MoviePage movies={movies} />} />
        </Routes>
        <Footer logoUrl={""} children={undefined} />
      </div>
    </BrowserRouter>
  );
};

export default App;
