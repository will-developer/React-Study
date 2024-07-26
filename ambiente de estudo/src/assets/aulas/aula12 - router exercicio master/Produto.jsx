import React from 'react';
import { useParams } from 'react-router-dom';
import './App.css';
import Head from './Head';

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const params = useParams();

  React.useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`)
      .then((r) => r.json())
      .then((json) => setProduto(json));
  }, [params.id]);

  return (
    <>
      {produto ? (
        <section key={produto.id} className="content-contact">
          <Head title={produto.nome} />
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
          <div className="contact-info">
            <h1 className="item-titulo">{produto.nome}</h1>
            <div className="item-preco">R$ {produto.preco}</div>
            <div className="item-descricao">{produto.descricao}</div>
          </div>
        </section>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
};

export default Produto;
