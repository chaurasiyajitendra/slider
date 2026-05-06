import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

export default function CoverflowSlider() {
  return (
    <Swiper
      effect="coverflow"
      slidesPerView={3}
      spaceBetween={30}
      modules={[EffectCoverflow]}
      coverflowEffect={{
        rotate: 20,
        depth: 100,
        slideShadows: false
      }}
    >
      {[1,2,3,4,5].map(i => (
        <SwiperSlide key={i}>
          <img
            src={`https://picsum.photos/300/200?random=${i}`}
            style={{ borderRadius: "12px", width: "100%" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}