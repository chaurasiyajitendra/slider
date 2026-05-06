import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect } from "react";

export default function AutoScrollKeen() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: { perView: 4, spacing: 15 },
  });

  useEffect(() => {
    let interval = setInterval(() => {
      slider.current?.next();
    }, 2000);
    return () => clearInterval(interval);
  }, [slider]);

  return (
    <div ref={sliderRef} className="keen-slider">
      {[1,2,3,4,5,6].map(i => (
        <div className="keen-slider__slide" key={i}>
          <img
            src={`https://picsum.photos/200/150?random=${i}`}
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>
      ))}
    </div>
  );
}