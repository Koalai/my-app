import { useRef } from "react";

export const Carousel = () => {
  const images = [
    "/real_estate_3/room_1.png",
    "/real_estate_3/room_2.png",
    "/real_estate_3/room_3.png",
    "/real_estate_3/room_4.png",
    "/real_estate_3/room_5.png",
    "/real_estate_3/room_6.png",
  ];

  const infiniteImages = [...images, ...images];
  const carouselRef = useRef(null);

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={carouselRef}
        className="flex animate-scroll gap-8"
        style={{
          width: `${
            infiniteImages.length * 500 + (infiniteImages.length - 1) * 32
          }px`,
        }}
      >
        {infiniteImages.map((image, index) => (
          <img
            src={image}
            key={index}
            alt={`Slide ${index + 1}`}
            className="w-[400px] h-[550px] flex-shrink-0 object-cover"
          />
        ))}
      </div>
    </div>
  );
};
