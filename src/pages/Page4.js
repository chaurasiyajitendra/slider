import useEmblaCarousel from "embla-carousel-react";
import { useState } from "react";

export default function ThumbSlider() {
  const [selected, setSelected] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const images = [1015, 1016, 1018];

  return (
    <div>
      {/* Main */}
      <div style={{ overflow: "hidden" }} ref={emblaRef}>
        <div style={{ display: "flex" }}>
          {images.map((id, i) => (
            <div key={i} style={{ minWidth: "100%" }}>
              <img src={`https://picsum.photos/id/${id}/800/400`} style={{ width: "100%" }} />
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        {images.map((id, i) => (
          <img
            key={i}
            src={`https://picsum.photos/id/${id}/100/60`}
            onClick={() => emblaApi.scrollTo(i)}
            style={{
              cursor: "pointer",
              border: selected === i ? "2px solid red" : "2px solid transparent"
            }}
          />
        ))}
      </div>
    </div>
  );
}