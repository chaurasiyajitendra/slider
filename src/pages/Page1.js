import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function FadeHeroSlider() {
  const slides = [
    { img: "https://picsum.photos/id/1018/1200/400", title: "Premium Collection" },
    { img: "https://picsum.photos/id/1015/1200/400", title: "New Arrivals" },
    { img: "https://picsum.photos/id/1019/1200/400", title: "Big Sale" },
  ];

  return (
    <Swiper
      modules={[EffectFade, Autoplay, Pagination]}
      effect="fade"
      autoplay={{ delay: 2500 }}
      pagination={{ clickable: true }}
    >
      {slides.map((s, i) => (
        <SwiperSlide key={i}>
          <div style={{ position: "relative" }}>
            <img src={s.img} style={{ width: "100%", height: "400px", objectFit: "cover" }} />
            <h2 style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#fff",
              fontSize: "32px",
              background: "rgba(0,0,0,0.4)",
              padding: "10px 20px",
              borderRadius: "8px"
            }}>
              {s.title}
            </h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}