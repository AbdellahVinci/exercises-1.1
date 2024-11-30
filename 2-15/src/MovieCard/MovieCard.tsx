import { Movie } from "../types";

interface MovieCardProps{
    movie:  Movie;
}

const MovieCard =({movie}: MovieCardProps)=>(
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
        <h3>{movie.title}</h3>
        <p>Director:{movie.director}</p>
        <p>Duration:{movie.duration} minutes</p>
        {movie.image && <img src={movie.image} alt={movie.title} style={{ width: "150px" }} />}
        {movie.description && <p>{movie.description}</p>}
        {movie.budget && <p>Budget: ${movie.budget} million</p>}
  </div>
);

export default MovieCard


