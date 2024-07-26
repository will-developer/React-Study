import React from 'react';
import escrivaninha from './img/contato.jpg';
import './App.css';
import Head from './Head';

const Contatos = () => {
  return (
    <section className="content-contact">
      <Head title="Contato" />
      <img src={escrivaninha} alt="escrivaninha" />
      <div className="contact-info">
        <h2>Entre em contato</h2>
        <p>--- william_limaa@hotmail.com</p>
        <p>--- (13) 99999-9999</p>
        <p>--- Rua Alamado, 593</p>
      </div>
    </section>
  );
};

export default Contatos;
