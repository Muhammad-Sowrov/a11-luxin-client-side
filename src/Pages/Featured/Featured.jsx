import { Swiper, SwiperSlide } from "swiper/react";
// import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
const Featured = () => {
  return (
    <div className="container mx-auto my-5">
      <h1 className="text-3xl font-bold text-center">Featured Room</h1>
      <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img className="px-2 mt-5" src="https://i.ibb.co/TKf4z1S/comfortable-pillow-bed-1.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/23tzV05/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table-1.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/qBZvy1Z/luxury-classic-modern-bedroom-suite-hotel-1.jpg"/></SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
};

export default Featured;
