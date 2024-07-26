import React from 'react';

const Produto = ({ arr }) => {
  return (
    <section>
      <h1>{arr.nome}</h1>
      <p>
        <b>Preço: </b>
        R$ {arr.preco}
      </p>
    </section>
  );
};

export default Produto;
