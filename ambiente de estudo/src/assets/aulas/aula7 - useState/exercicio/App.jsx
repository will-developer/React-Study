import React from 'react';
import ApiTablet from './ApiTablet';
import ApiNotebook from './ApiNotebook';
import ApiSmartphone from './ApiSmartphone';

const App = () => {
  const [showItem, setShowItem] = React.useState(<ApiSmartphone />);

  const handleClick = (e) => {
    const buttonText = e.target.innerText;

    if (buttonText.includes('Tablet')) {
      setShowItem(<ApiTablet />);
    } else if (buttonText.includes('Notebook')) {
      setShowItem(<ApiNotebook />);
    } else if (buttonText.includes('Smartphone')) {
      setShowItem(<ApiSmartphone />);
    }
  };

  return (
    <>
      <button onClick={handleClick}>Mostrar Tablet</button>
      <button style={{ margin: '0 1rem' }} onClick={handleClick}>
        Mostrar Notebook
      </button>
      <button onClick={handleClick}>Mostrar Smartphone</button>
      {showItem}
    </>
  );
};

export default App;
