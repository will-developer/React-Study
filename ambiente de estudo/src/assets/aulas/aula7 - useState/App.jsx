import React from 'react';

const App = () => {
  const [contar, setContar] = React.useState(1);
  const [items, setItems] = React.useState(['Item 1']);

  function handleClick() {
    setContar(contar + 1);
    setItems([...items, 'Item ' + (contar + 1)]);
  }
  // Tirar o efeito de dentro do setContar irá concertar o erro
  // setItems((items) => [...items, 'Item ' + (contar + 1)]);

  return (
    <>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>{contar}</button>
    </>
  );
};

export default App;
