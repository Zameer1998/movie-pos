import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>Movie App</h1>
      <nav>
        <ul className="nav-right">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
