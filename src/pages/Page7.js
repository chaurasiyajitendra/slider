import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

// import '../styles.css';

// import required modules
import { EffectCube, Pagination  } from 'swiper/modules';

export default function Page7() {

  return (
    <>
      <Swiper
      style={{
        width: "300px",
        height: "300px",
        position: "absolute",
        left: "50%",
        top: "50%",
        marginLeft: "-150px",
        marginTop: "-150px",
      }}
        effect={'cube'}
        grabCursor={true}
        loop={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide
        style={{
            backgroundPosition: "center",
            backgroundSize: "cover"
        }}
        >
          <img
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }} 
          src="https://swiperjs.com/demos/images/abstract-1.jpg" />
        </SwiperSlide>
        <SwiperSlide
        style={{
            backgroundPosition: "center",
            backgroundSize: "cover"
        }}>
          <img style={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}  src="https://swiperjs.com/demos/images/abstract-2.jpg" />
        </SwiperSlide>
        <SwiperSlide
        style={{
            backgroundPosition: "center",
            backgroundSize: "cover"
        }}>
          <img style={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}  src="https://swiperjs.com/demos/images/abstract-3.jpg" />
        </SwiperSlide>
        <SwiperSlide
        style={{
            backgroundPosition: "center",
            backgroundSize: "cover"
        }}>
          <img style={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}  src="https://swiperjs.com/demos/images/abstract-4.jpg" />
        </SwiperSlide>
        <SwiperSlide
        style={{
            backgroundPosition: "center",
            backgroundSize: "cover"
        }}>
          <img style={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}  src="https://swiperjs.com/demos/images/abstract-2.jpg" /> 
        </SwiperSlide>
      </Swiper>
    </>
  );
}
