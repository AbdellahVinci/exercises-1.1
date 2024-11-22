import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cinema">Cinéma</Link>
        </li>
        <li>
          <Link to="/movies">Mes Films</Link>
        </li>
        <li>
        <Link to="/add-movie">Ajouter un Film</Link>
      </li>
      </ul>
    </nav>
  );
};

export default Navbar;
