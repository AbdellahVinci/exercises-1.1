import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Movie } from "./types";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import CinemaPage from "./Pages/CinemaPage"; // Importation correcte
import MovieListPage from "./Pages/MovieListPage";
import AddMoviePage from "./Pages/AddMoviePage";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([
    { title: "Inception", director: "Christopher Nolan", duration: 148 },
    { title: "The Matrix", director: "Wachowski Sisters", duration: 136 },
    { title: "Interstellar", director: "Christopher Nolan", duration: 169 },
    { title: "The Shawshank Redemption", director: "Frank Darabont", duration: 142 },
    { title: "Pulp Fiction", director: "Quentin Tarantino", duration: 154 },
  ]);

  const addMovie = (movie: Movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <BrowserRouter>
      <div style={{ padding: "20px" }}>
        <Header logoUrl={""} children={undefined} />
        <Navbar />
        <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/cinema" element={<CinemaPage />} />
    <Route
    path="/movies"
    element={<MovieListPage movies={movies} onAddMovie={addMovie} />}
   />
  <Route
    path="/add-movie"
    element={<AddMoviePage onAddMovie={addMovie} />}
  />
   </Routes>
        <Footer logoUrl={""} children={undefined} />
      </div>
    </BrowserRouter>
  );
};

export default App;
