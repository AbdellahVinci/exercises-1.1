
import Footer from '../Footer/Footer';  

const HomePage = () => {
  return (
    <div>
      <h1>Bienvenue sur iMovies</h1>
      <p>Explorez les films des cinémas UGC et votre collection de films préférés.</p>

      {/* Footer ajouté à la page d'accueil */}
      <Footer logoUrl="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" children={undefined} />
      <p>© 2024 Mon Application</p>
        <p>Contactez-nous pour plus d'informations</p>
    </div>
  );
};

export default HomePage;
