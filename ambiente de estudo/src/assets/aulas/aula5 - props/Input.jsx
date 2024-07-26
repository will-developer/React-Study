import React from 'react';

/* Usamos o rest e spread quando não sabemos todas as propriedades que um componente pode receber.
const Input = ({ label, id, ...props }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...props} />
    </div>
  );
};
*/

const Input = ({ id, ...props }) => {
  return (
    <div style={{ margin: '1rem 0' }}>
      <label htmlFor={id} style={{ textTransform: 'capitalize' }}>
        {id}
      </label>
      <input id={id} type="text" {...props} />
    </div>
  );
};

export default Input;
