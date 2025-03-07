import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-600 p-4 text-white">
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/">Головна</Link></li>
          <li><Link to="/about">Про нас</Link></li>
          <li><Link to="/events">Події</Link></li>
          <li><Link to="/gallery">Галерея</Link></li>
          <li><Link to="/documents">Документи</Link></li>
          <li><Link to="/contact">Контакти</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
