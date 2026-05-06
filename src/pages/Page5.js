import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

export default function Pro3DSlider() {
  const slides = [
    { img: "https://picsum.photos/id/1015/400/300", title: "Shoes" },
    { img: "https://picsum.photos/id/1016/400/300", title: "Watch" },
    { img: "https://picsum.photos/id/1018/400/300", title: "Phone" },
    { img: "https://picsum.photos/id/1020/400/300", title: "Laptop" },
    { img: "https://picsum.photos/id/1024/400/300", title: "Camera" },
  ];

  return (
    <div style={{ padding: "40px", background: "#0f172a" }}>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        autoplay={{ delay: 2000 }}
        modules={[EffectCoverflow]}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
          slideShadows: true,
        }}
        style={{ paddingBottom: "40px" }}
      >
        {slides.map((item, i) => (
          <SwiperSlide
            key={i}
            style={{
              width: "300px",
              borderRadius: "15px",
              overflow: "hidden",
              position: "relative",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            }}
          >
            <img
              src={item.img}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
              }}
            />

            {/* Overlay */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
                color: "#fff",
                padding: "15px",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              {item.title}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}