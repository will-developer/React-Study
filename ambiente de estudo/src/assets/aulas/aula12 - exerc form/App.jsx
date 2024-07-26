import React from 'react';
import Radio from './Radio';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

const App = () => {
  const [pos, setPos] = React.useState('p1');
  const [valor, setValor] = React.useState(2);
  const [opt, setOpt] = React.useState('');
  const [question, setQuestion] = React.useState(0);

  const respostas = perguntas.map(({ resposta }) => resposta);

  function handleClick(e) {
    e.preventDefault();
    setPos('p' + valor);
    setValor(valor + 1);

    if (opt === respostas[question]) {
      setQuestion(question + 1);
    }
  }

  return (
    <>
      {perguntas.map((itens) =>
        pos === itens.id ? (
          <form key={itens.id}>
            <fieldset>
              <legend>
                <b>{itens.pergunta}</b>
              </legend>
              <Radio options={itens.options} value={opt} setValue={setOpt} />
            </fieldset>
          </form>
        ) : (
          ''
        ),
      )}
      {pos !== 'p5' ? (
        <button onClick={handleClick} style={{ margin: '1rem 0' }}>
          Próxima
        </button>
      ) : (
        <p>
          Você acertou: {question} de {respostas.length}
        </p>
      )}
    </>
  );
};

export default App;
