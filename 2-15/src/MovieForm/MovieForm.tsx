import { useState } from "react";
import { Movie } from "../types";

interface MovieFormProps {
  onAddMovie: (movie: Omit<Movie, 'id'>) => void; // On attend un film sans id
}

const MovieForm = ({ onAddMovie }: MovieFormProps) => {
  const [newMovie, setNewMovie] = useState<Omit<Movie, "id">>({
    title: "",
    director: "",
    duration: 0,
    imageUrl: "",
    description: "",
    budget: undefined,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewMovie({
      ...newMovie,
      [name]: name === "duration" || name === "budget" ? Number(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting new movie:", newMovie);
    onAddMovie(newMovie); // On envoie le film sans l'ID
    setNewMovie({
      title: "",
      director: "",
      duration: 0,
      imageUrl: "",
      description: "",
      budget: undefined,
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
      <input type="text" name="title" placeholder="Title" value={newMovie.title} onChange={handleInputChange} required />
      <input type="text" name="director" placeholder="Director" value={newMovie.director} onChange={handleInputChange} required />
      <input type="number" name="duration" placeholder="Duration in minutes" value={newMovie.duration} onChange={handleInputChange} required />
      <input type="text" name="imageUrl" placeholder="Image URL" value={newMovie.imageUrl} onChange={handleInputChange} />
      <input type="text" name="description" placeholder="Description" value={newMovie.description} onChange={handleInputChange} />
      <input type="number" name="budget" placeholder="Budget (in million)" value={newMovie.budget ?? ""} onChange={handleInputChange} />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default MovieForm;
