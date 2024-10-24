import { Movie } from '../../type';         
import Cinema from '../Cinema/Cinema';       
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PageTitle from '../PageTitle/PageTitle'; 

const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";

  const moviesCinema1: Movie[] = [
    {
      title: "HAIKYU-THE DUMPSTER BATTLE",
      director: "Susumu Mitsunaka",
    },
    {
      title: "GOODBYE JULIA",
      director: "Mohamed Kordofani",
    },
    {
      title: "INCEPTION",
      director: "Christopher Nolan",
    },
    {
      title: "PARASITE",
      director: "Bong Joon-ho",
    },
  ];

  const cinema2Name = "UGC Toison d'Or";

  const moviesCinema2: Movie[] = [
    {
      title: "THE WATCHERS",
      director: "Ishana Night Shyamalan",
    },
    {
      title: "BAD BOYS: RIDE OR DIE",
      director: "Adil El Arbi, Bilall Fallah",
    },
    {
      title: "TENET",
      director: "Christopher Nolan",
    },
    {
      title: "THE IRISHMAN",
      director: "Martin Scorsese",
    },
  ];

  return (
    <div>
        <Header logoUrl="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg">
        
        <nav>
          <a href="#home">Accueil</a>
          <a href="#about">À propos</a>
          <a href="#contact">Contact</a>
        </nav>
      </Header>

      <PageTitle title={pageTitle} />
      <Cinema name={cinema1Name} movies={moviesCinema1} />
      <Cinema name={cinema2Name} movies={moviesCinema2} />

      <Footer logoUrl="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg">
      <p>© 2024 Mon Application</p>
      <p>Contactez-nous pour plus d'informations</p>

      </Footer>


    </div>
  );
};

export default App;
