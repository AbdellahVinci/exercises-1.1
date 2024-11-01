import { useState } from "react";
import  './Movie.css';


interface MovieProps{
    title:string;
    director:string;
    description:string;
    

}

const Movie : React.FC<MovieProps>=({title,director,description})=>{

    const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };


    return(

        <div onClick={toggleDescription} style={{ cursor: 'pointer', marginBottom: '10px'}}>
            <h2>{title} </h2>
            <p>Directed by: {director}</p>
      {showDescription && <p>Description: {description}</p>}
    </div>
  );
};

export default Movie;



      