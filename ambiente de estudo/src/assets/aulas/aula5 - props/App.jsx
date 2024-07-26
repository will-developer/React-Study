import React from 'react';
import Form from './assets/aulas/aula5 - props/Form';
import Header from './assets/aulas/aula5 - props/Header';

const App = () => {
  const logado = true;
  const nome = 'André';
  return (
    <>
      <section>
        <Header logado={logado} nome={nome} />
      </section>
      <Form />
    </>
  );
};

export default App;
