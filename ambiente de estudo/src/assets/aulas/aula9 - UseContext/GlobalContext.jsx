import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [target, setTarget] = React.useState(null);
  const [produto, setProduto] = React.useState(null);

  function handleRemove() {
    localStorage.removeItem('target');
    setProduto(null);
  }

  React.useEffect(() => {
    if (target !== null)
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${target}`)
        .then((r) => r.json())
        .then((json) => setProduto(json));
  }, [target]);

  React.useEffect(() => {
    const produtoLocal = localStorage.getItem('target');
    if (produtoLocal !== null) setTarget(produtoLocal);
  }, []);

  React.useEffect(() => {
    if (target !== null) localStorage.target = target;
  }, [target]);

  function handleClick({ target }) {
    setTarget(target.innerText);
  }

  return (
    <GlobalContext.Provider value={{ handleClick, produto, handleRemove }}>
      {children}
    </GlobalContext.Provider>
  );
};
