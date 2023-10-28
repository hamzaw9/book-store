import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (
  <nav>
    <div className="navbar-content1">
      <Link className="logo" to="/">
        Bookstore CMS
      </Link>

      <ul className="nav-links">
        <li>
          <Link className="nav-link" to="/">
            BOOKS
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/categories">
            CATEGORIES
          </Link>
        </li>
      </ul>
    </div>

    <div className="navbar-content2">
      <FontAwesomeIcon className="faUser" icon={faUser} />
    </div>
  </nav>
);

export default Navbar;
