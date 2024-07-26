import React from 'react';

const Aula3 = () => {
  // Organize os produtos como mostrado no vídeo
  // Mostre apenas produtos que forem mais caros que R$ 1500
  const produtos = [
    {
      id: 1,
      nome: 'Smartphone',
      preco: 'R$ 2000',
      cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
      id: 2,
      nome: 'Notebook',
      preco: 'R$ 3000',
      cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
      id: 3,
      nome: 'Tablet',
      preco: 'R$ 1500',
      cores: ['#365069', '#47c1c8', '#f95786'],
    },
  ];

  return (
    <section>
      {produtos
        .filter(({ preco }) => +preco.replace('R$ ', '') > 1500)
        .map(({ id, nome, preco, cores }) => (
          <div key={id}>
            <h1>{nome}</h1>
            <p>Preço: {preco},00</p>
            <ul key={id}>
              {cores.map((cor) => (
                <li style={{ backgroundColor: cor, color: 'white' }}>{cor}</li>
              ))}
            </ul>
          </div>
        ))}
    </section>
  );
};

export default Aula3;
