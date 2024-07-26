import React from 'react';

const Header = () => {
  const { pathname } = window.location;
  return (
    <header>
      <ul>
        <li>
          <a href="./Home">Home</a>
        </li>
        <li>
          <a href="./Produtos">Produtos</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
