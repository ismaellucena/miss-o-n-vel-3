import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Catálogo</Link>
        </li>
        <li>
          <Link to="/novo">Novo</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
