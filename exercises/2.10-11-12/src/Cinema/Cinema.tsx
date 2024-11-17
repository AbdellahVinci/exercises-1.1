import React from 'react';
import MovieList from '../MovieList/MovieList';  // Importez MovieList
import { Movie } from '../types'; 

interface CinemaProps {
  name: string;
  movies: Movie[];
}

const Cinema: React.FC<CinemaProps> = ({ name, movies }) => {
  return (
    <div>
      <h1>{name}</h1>
      <MovieList movies={movies} />  {/* Passez les films à MovieList */}
    </div>
  );
};

export default Cinema;
