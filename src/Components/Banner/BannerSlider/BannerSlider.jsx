import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { sliderSettings } from '../../../common';
import './bannerSlider.css';

const BannerSlider = () => {
  return (
    <>
      <Swiper modules={[Autoplay]} {...sliderSettings}>
        <SwiperSlide>
          <div className='site__banner-slider--img'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='site__banner-slider--img slide02'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='site__banner-slider--img slide03'></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BannerSlider;
