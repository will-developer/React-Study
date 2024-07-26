import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contatos from './Contatos';
import Header from './Header';
import NaoEncontrada from './NaoEncontrada';
import Produto from './Produto';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contatos" element={<Contatos />} />
          <Route path="produto/:id" element={<Produto />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
