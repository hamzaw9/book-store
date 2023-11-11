import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav>
      <div className="navbar-content1">
        <Link
          className={`logo ${activeLink === '/' ? 'active' : ''}`}
          to="/"
          onClick={() => handleLinkClick('/')}
        >
          Bookstore CMS
        </Link>

        <ul className="nav-links">
          <li>
            <Link
              className={`nav-link ${activeLink === '/' ? 'active' : ''}`}
              to="/"
              onClick={() => handleLinkClick('/')}
            >
              BOOKS
            </Link>
          </li>
          <li>
            <Link
              className={`nav-link ${
                activeLink === '/categories' ? 'active' : ''
              }`}
              to="/categories"
              onClick={() => handleLinkClick('/categories')}
            >
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
};

export default Navbar;
