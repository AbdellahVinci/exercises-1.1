import { Movie, NewMovie } from "../types";

export const fetchMovies = async (): Promise<Movie[]> => {
  console.log("Fetching movies...");
  const response = await fetch("/api/films");
  if (!response.ok) {
    console.error("Erreur lors de la récupération des films:", response.statusText);
    throw new Error("Erreur lors de la récupération des films.");
  }
  const data = await response.json();
  console.log("Movies fetched:", data);
  return data;
};

export const addMovie = async (newMovie: NewMovie): Promise<Movie> => {
  console.log("Creating movie:", newMovie);
  const response = await fetch("/api/films", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newMovie),
  });
  if (!response.ok) {
    console.error("Erreur lors de l'ajout du film:", response.statusText);
    throw new Error("Erreur lors de l'ajout du film.");
  }
  const data = await response.json();
  console.log("Movie created:", data);
  return data;
};