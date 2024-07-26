import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalContext); //

  const validacao = global.produto !== null;

  return (
    <>
      <button onClick={(e) => global.handleClick(e)}>Notebook</button>
      <button onClick={(e) => global.handleClick(e)}>Smartphone</button>
      <button onClick={(e) => global.handleClick(e)}>Tablet</button>
      <button onClick={(e) => global.handleRemove(e)}>Limpar Dados</button>
      {validacao && (
        <section>
          <h1>{global.produto.nome}</h1>
          <p>
            <span style={{ fontWeight: 'bold' }}>email do vendendor:</span>{' '}
            {global.produto.usuario_id}
          </p>
          <img
            src={global.produto.fotos[0].src}
            alt={global.produto.fotos[0].titulo}
            style={{ height: '30rem' }}
          />
          <p>
            <span style={{ fontWeight: 'bold' }}>Descrição: </span>
            {global.produto.descricao}
          </p>
          <p>
            <span style={{ fontWeight: 'bold' }}>Preço: </span>R${' '}
            {global.produto.preco}
            ,00
          </p>
          <p>
            <span style={{ fontWeight: 'bold' }}>Estoque: </span>
            <span style={{ color: global.produto.vendido ? 'green' : 'red' }}>
              {global.produto.vendido ? 'Disponível' : 'Indisponível'}
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default Produto;
