import React from 'react';
import './banner.css';
import BannerSlider from './BannerSlider/BannerSlider';

const Banner = () => {
  return (
    <section className='site__banner'>
      <BannerSlider />
      <article className='container flex-column'>
        <h1 className='site__title'>
          Bienvenidos a la biblioteca de videos de Dragon Ball Z
        </h1>
        <p className='paragraph text-center'>
          Capítulos de una de las series más icónicas de nuestra infancia.
        </p>
      </article>
    </section>
  );
};

export default Banner;
