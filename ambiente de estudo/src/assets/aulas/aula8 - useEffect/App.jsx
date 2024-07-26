import React from 'react';
import Produto from './Produto';

const App = () => {
  const [arr, setArr] = React.useState(null);

  const handleClick = async (e) => {
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${e.target.innerText}`,
    );
    const json = await response.json();
    setArr(json);

    // Armazena o item selecionado no localStorage
    localStorage.selectedItem = JSON.stringify(json);
  };

  React.useEffect(() => {
    const storedItem = localStorage.getItem('selectedItem');

    if (storedItem) {
      setArr(JSON.parse(storedItem));
    }
  }, []);

  return (
    <>
      <button onClick={handleClick}>Notebook</button>
      <button style={{ margin: '0 .5rem' }} onClick={handleClick}>
        Tablet
      </button>
      <button onClick={handleClick}>Smartphone</button>
      {arr && <Produto arr={arr} />}
    </>
  );
};

export default App;
