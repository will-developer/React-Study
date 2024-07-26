import React from 'react';
import Home from './Home';
import Produtos from './Produtos';
import Header from './Header';

const App = () => {
  const { pathname } = window.location;
  const Element = pathname === '/Home' ? Home : Produtos;

  return (
    <>
      <Header />
      <Element />
    </>
  );
};

export default App;
