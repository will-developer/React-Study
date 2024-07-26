import React from 'react';

const Aula2 = () => {
  // Mostre os dados da aplicação, como aprensetado no vídeo
  // Não utilize CSS externo, use o style para mudar as cores
  // Se a situação estiver ativa pinte de verde, inativa vermelho
  // Se o gasto for maior que 10000 mostre uma mensagem
  const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
  };

  const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
      { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
  };

  const dadosFunction = (dados) => {
    const { compras } = dados;
    const precoFormatado = compras.map(
      (item) => +item.preco.replace('R$ ', ''),
    );
    const somaTotal = precoFormatado.reduce((acc, cv) => acc + cv, 0);
    const isWhat = somaTotal > 10000 ? true : false;

    const operacaoFunction = (dados) => {
      const { cliente, idade, ativa, compras } = dados;
      const nomes = compras.map((item) => item.nome);
      const precos = compras.map((item) => +item.preco.replace('R$ ', ''));

      let itensFormatados = [];
      for (let i = 0; i < precos.length; i++) {
        itensFormatados += `${nomes[i]}: R$ ${precos[i].toFixed(2).replace('.', ',')} \n`;
      }

      return (
        <>
          <h1>Nome: {cliente}</h1>
          <p>
            <b>Idade:</b> {idade}
          </p>
          <pre>
            <b>Compras:</b> {'\n'}
            {itensFormatados}
          </pre>
          <p>
            <b>Total de compras:</b> R$ {somaTotal.toFixed(2).replace('.', ',')}
          </p>
          <p>
            <b>Situação:</b>{' '}
            <span style={{ color: ativa ? 'green' : 'red' }}>
              {ativa ? 'Ativa' : 'Inativa'}
            </span>
          </p>
          {isWhat && <i>Você ultrapassou o límite de R$ 10.000,00 reais</i>}
        </>
      );
    };
    return operacaoFunction(dados);
  };

  return (
    <>
      {dadosFunction(luana)}
      {dadosFunction(mario)}
    </>
  );
};

export default Aula2;
