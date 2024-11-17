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
      </ul>
    </nav>
  );
};

export default Navbar;
