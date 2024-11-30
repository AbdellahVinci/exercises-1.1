import Cinema from '../Cinema/Cinema';       
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PageTitle from '../PageTitle/PageTitle';
import './CinemaPage.css'

const CinemaPage = () => {
  const pageTitle = "Informations sur les films dans les cinémas :";

  const cinema1Name = "UGC De Brouckère";

  const moviesCinema1 = [
    {
      id:"1",
      title: "HAIKYU-THE DUMPSTER BATTLE",
      director: "Susumu Mitsunaka",
      description:
        "A high-energy sports anime movie focusing on the intense volleyball rivalry between Karasuno High and their fierce competitors.",
      duration:120,  
      image: "https://path_to_image1.jpg",
    },
    {
      id:"2",
      title: "GOODBYE JULIA",
      director: "Mohamed Kordofani",
      description:
        "A poignant drama that explores themes of love, loss, and the complex dynamics of human relationships in a deeply emotional narrative.",
        duration:120,
        image: "https://path_to_image1.jpg",
    },
    {   id:"3",
      title: "INCEPTION",
      director: "Christopher Nolan",
      description:
        "A mind-bending sci-fi thriller where a skilled thief, who enters people's dreams to steal secrets, is given a chance to have his criminal record erased if he can implant an idea into a target's subconscious.",
        duration:120,
        image: "https://m.media-amazon.com/images/M/MV5BMTI3NDE0MzgxNl5BMl5BanBnXkFtZTcwMzM2NDUyMg@@._V1_FMjpg_UX1000_.jpg",
    },
    {  id:"4",
      title: "PARASITE",
      director: "Bong Joon-ho",
      description:
        "An Oscar-winning dark comedy thriller that examines class disparities through the story of two families — one wealthy, the other destitute — and their increasingly complicated relationship.",
        duration:120,
        image: "https://specials-images.forbesimg.com/imageserve/5d9e224b4223bf0006b812b8/960x0.jpg?fit=scale",
    },
  ];

  const cinema2Name = "UGC Toison d'Or";

  const moviesCinema2 = [
    {  id:"1",
      title: "THE WATCHERS",
      director: "Ishana Night Shyamalan",
      description:
        "A suspenseful thriller that follows a group of people who are under constant surveillance, leading them to uncover dark secrets about their observers and themselves.",
      duration:110,  
      image: "https://path_to_image1.jpg",
    },
    {  id:"2",
      title: "BAD BOYS: RIDE OR DIE",
      director: "Adil El Arbi, Bilall Fallah",
      description:
        "The latest installment in the action-packed Bad Boys franchise, featuring detectives Mike Lowrey and Marcus Burnett as they take on their most dangerous case yet.",
        duration:110,  
        image: "https://th.bing.com/th/id/OIP.hvom1lktleOUtjkib7WylgHaLK?rs=1&pid=ImgDetMain",
    },
    {  id:"3",
      title: "TENET",
      director: "Christopher Nolan",
      description:
        "A complex and visually stunning sci-fi action film where a protagonist embarks on a time-bending mission to prevent World War III, navigating through a world of temporal inversion.",
        duration:110,  
        image: "https://path_to_image1.jpg",
    },

    {  id:"4",
      title: "THE IRISHMAN",
      director: "Martin Scorsese",
      description:
        "An epic crime drama that chronicles the life of Frank Sheeran, a mob hitman, as he reflects on his involvement with the Bufalino crime family and the mysterious disappearance of his friend, Jimmy Hoffa.",
        duration:110,  
        image: "https://path_to_image1.jpg",
    },
  ];

  return (
    <div>
      <Header logoUrl="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" children={undefined}>
        
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

export default CinemaPage;
