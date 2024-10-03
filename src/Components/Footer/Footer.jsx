import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container flex-column'>
        <p className='paragraph text-center'>
          Basado en el challenge AluraFlix de la formación React de <br />
          Oracle Next Education y Alura Latam.
        </p>
        <p className='paragraph text-center'>Diseñado por</p>
        <img src='./img/logo-black.png' alt='' />
      </div>
    </footer>
  );
};

export default Footer;
