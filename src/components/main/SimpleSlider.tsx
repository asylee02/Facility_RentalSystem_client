// src/App.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="w-full h-full">
      <Slider {...settings}>
        <img src={`/images/lecture.png`} className="w-full h-[250px] border-y-[1px]" />
        <img src={`/images/lecture.png`} className="w-full h-[250px] border-y-[1px]" />
        <img src={`/images/lecture.png`} className="w-full h-[250px] border-y-[1px]" />
      </Slider>
    </div>
  );
};

export default App;
