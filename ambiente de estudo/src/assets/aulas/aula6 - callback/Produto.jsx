import React from 'react';

const Produto = ({ nome, propriedades }) => {
  return (
    <div
      style={{
        border: '1px solid black',
        padding: '10px 20px',
        marginBottom: '20px',
      }}
    >
      <p>{nome}</p>
      <ul>
        {propriedades.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Produto;
