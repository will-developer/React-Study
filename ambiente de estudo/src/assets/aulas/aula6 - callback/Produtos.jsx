import React from 'react';
import H1 from './H1';
import Produto from './Produto';

const Produtos = () => {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
    { nome: 'Tablet', propriedades: ['4gb ram', '256gb'] },
  ];

  return (
    <section>
      <H1 texto="Produtos: " />
      {produtos.map((item) => (
        <Produto key={item.nome} {...item} />
      ))}
    </section>
  );
};

export default Produtos;
