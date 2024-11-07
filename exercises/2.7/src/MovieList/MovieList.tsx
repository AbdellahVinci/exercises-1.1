import MovieCard from "../MovieCard/MovieCard";
import { Movie } from "../types";

interface MovieListProps{
    
    movies:Movie[]
}
const MovieList = ({ movies }: MovieListProps) => (
    <div>
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
  
  export default MovieList;