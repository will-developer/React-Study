import React from 'react';
import { Link } from 'react-router-dom';
import Head from './Head';

const Home = () => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((r) => r.json())
      .then((json) => setProduto(json));
  }, []);

  return (
    <>
      <Head title="Home" />
      <div className="container-products">
        {produto ? (
          produto.map((item) => (
            <div className="content-products" key={item.id}>
              <div>
                <Link to={`produto/${item.id}`}>
                  <img src={item.fotos[0].src} alt={item.fotos[0].titulo} />

                  <h1>{item.nome}</h1>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>loading...</p>
        )}
      </div>
    </>
  );
};

export default Home;
