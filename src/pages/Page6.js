import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

export default function PremiumCarousel() {

  const slides = [
    { img: "https://picsum.photos/id/1015/400/300", title: "Shoes" },
    { img: "https://picsum.photos/id/1016/400/300", title: "Watch" },
    { img: "https://picsum.photos/id/1018/400/300", title: "Phone" },
    { img: "https://picsum.photos/id/1020/400/300", title: "Laptop" },
    { img: "https://picsum.photos/id/1024/400/300", title: "Camera" },
  ];

  return (
    <div style={{ padding: "40px", background: "#111" }}>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        navigation
        loop={true}
        autoplay={true}
        style={{ padding: "40px 0" }}
      >
        {slides.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <div
                style={{
                  transform: isActive ? "scale(1.1)" : "scale(0.9)",
                  opacity: isActive ? 1 : 0.5,
                  filter: isActive ? "blur(0px)" : "blur(2px)",
                  transition: "0.4s",
                  borderRadius: "15px",
                  overflow: "hidden",
                  boxShadow: isActive
                    ? "0 15px 40px rgba(0,0,0,0.6)"
                    : "0 5px 15px rgba(0,0,0,0.3)",
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

                <div
                  style={{
                    padding: "10px",
                    background: "#000",
                    color: "#fff",
                    textAlign: "center",
                    fontWeight: "bold"
                  }}
                >
                  {item.title}
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}