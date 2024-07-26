import React from 'react';

const ApiSmartphone = () => {
  const [tablet, setTablet] = React.useState();

  const url = 'https://ranekapi.origamid.dev/json/api/produto/smartphone';

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setTablet(data);
    })
    .catch((error) => {
      console.error('Houve um erro:', error);
    });

  return (
    <>
      {tablet ? (
        <section>
          <h1>{tablet.nome}</h1>
          <p>
            <span style={{ fontWeight: 'bold' }}>email do vendendor:</span>{' '}
            {tablet.usuario_id}
          </p>
          <img
            src={tablet.fotos[0].src}
            alt={tablet.fotos[0].titulo}
            style={{ height: '30rem' }}
          />
          <p>
            <span style={{ fontWeight: 'bold' }}>Descrição: </span>
            {tablet.descricao}
          </p>
          <p>
            <span style={{ fontWeight: 'bold' }}>Preço: </span>R$ {tablet.preco}
            ,00
          </p>
          <p>
            <span style={{ fontWeight: 'bold' }}>Estoque: </span>
            <span style={{ color: tablet.vendido ? 'green' : 'red' }}>
              {tablet.vendido ? 'Disponível' : 'Indisponível'}
            </span>
          </p>
        </section>
      ) : (
        <p>
          <span style={{ fontWeight: 'bold' }}>Carregando...</span>
        </p>
      )}
    </>
  );
};

export default ApiSmartphone;
