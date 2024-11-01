
import React from 'react';
import Movie from '../Movie/Movie';


interface MovieData{
  title:string;
  director:string;
  description:string;

}
interface CinemaProps {
  name: string;
  movies: MovieData[];
}

const Cinema: React.FC<CinemaProps> = ({ name, movies }) => {
  return (
    <div>
      <h1>{name}</h1>
      {movies.map((movie, index) => (
        <Movie
          key={index}
          title={movie.title}
          director={movie.director}
          description={movie.description}
        />
      ))}
    </div>
  );
};

export default Cinema;