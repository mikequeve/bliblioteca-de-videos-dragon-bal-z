import React from 'react';
import './roshiSection.css';

const RoshiSection = () => {
  return (
    <section className='site__section flex-center'>
      <article className='container flex-center flex-wrap'>
        <img src='./img/roshi.png' alt='maestro roshi' />
        <div className='text__container'>
          <h2 className='section__title text-center'>El Maestro Roshi</h2>
          <p className='paragraph'>
            El Maestro Roshi, también conocido como el Duende Tortuga, es mucho
            más que un simple anciano con una extraña obsesión por las revistas
            de chicas. Roshi es un símbolo de sabiduría y poder, un maestro
            legendario que, a pesar de su apariencia despreocupada, ha dedicado
            su vida al dominio de las artes marciales y a la enseñanza de sus
            alumnos. Desde la solitaria Kame House, ha entrenado a algunos de
            los guerreros más poderosos del mundo, incluidos Goku y Krillin.
            <br />
            <br />
            Con su característico caparazón, gafas de sol y bastón, el Maestro
            Roshi es una figura que mezcla lo cómico con lo profundo. Aunque a
            menudo se le ve bromeando o comportándose de manera excéntrica, en
            su interior lleva una inmensa sabiduría, adquirida a lo largo de
            siglos de experiencia. Ha sido testigo de incontables batallas,
            tragedias y momentos gloriosos.
          </p>
        </div>
      </article>
    </section>
  );
};

export default RoshiSection;
