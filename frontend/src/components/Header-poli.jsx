import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav aria-label="Menu principal">
      <div className="logo">
        <Link to="/">
          <img src="/assets/img/Logo Walcem.png" alt="Logo WALCEM" />
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="#blog">Blog</Link></li>
        <li><Link to="#coleta">Coleta</Link></li>
        <li><Link to="#"><i className="fa fa-user-circle"></i></Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
