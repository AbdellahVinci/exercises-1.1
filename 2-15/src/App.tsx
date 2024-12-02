import { useState, useEffect, useCallback } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Movie, NewMovie } from "./types";

import Navbar from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import CinemaPage from "./Pages/CinemaPage";
import MovieListPage from "./Pages/MovieListPage";
import AddMoviePage from "./Pages/AddMoviePage";
import MoviePage from "./Pages/MoviePage";
import { fetchMovies, addMovie } from "./services/moviesService";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const initMovies = useCallback(async () => {
    try {
      console.log("Loading movies...");
      const movies = await fetchMovies();
      setMovies(movies);
      console.log("Movies loaded:", movies);
    } catch (error) {
      console.error("Erreur lors de la récupération des films:", error);
      setError("Failed to fetch movies");
    }
  }, []);

  useEffect(() => {
    initMovies();
  }, [initMovies]);

  const handleAddMovie = async (newMovie: NewMovie) => {
    try {
      console.log("Adding movie:", newMovie);
      await addMovie(newMovie);
      await initMovies();
      navigate("/movies");
    } catch (error) {
      console.error("Erreur lors de l'ajout du film:", error);
      setError("Failed to add movie");
    }
  };

  return (
    <div>
      <Navbar />
      {error && <div style={{ color: "red" }}>{error}</div>}
      <Routes>
        <Route path="/" element={<HomePage movies={movies} />} />
        <Route path="/cinema" element={<CinemaPage />} />
        <Route path="/movies" element={<MovieListPage movies={movies} />} />
        <Route path="/add-movie" element={<AddMoviePage onAddMovie={handleAddMovie} />} />
        <Route path="/movie/:id" element={<MoviePage movies={movies} />} />
      </Routes>
     
    </div>
  );
};

export default App;