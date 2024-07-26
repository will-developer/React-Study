import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav className="header-navigator">
        <NavLink to="/" end className="nav-produtos">
          Produtos
        </NavLink>
        <NavLink to="/Contatos" end className="nav-contatos">
          Contatos
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
