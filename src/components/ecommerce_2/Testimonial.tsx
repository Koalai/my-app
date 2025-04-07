import { useState } from "react";
import { TestimonialCard } from "./TestimonialCard";

const data = [
  {
    text: "I had a great experience shopping here. The quality of the products is top-notch and the customer service is excellent.",
    name: "John Doe",
    rating: 5,
  },
  {
    text: "I had a great experience shopping here. The quality of the products is top-notch and the customer service is excellent.",
    name: "John Doe",
    rating: 5,
  },
  {
    text: "I had a great experience shopping here. The quality of the products is top-notch and the customer service is excellent.",
    name: "John Doe",
    rating: 5,
  },
  {
    text: "Amazing products and fast delivery! I will definitely shop here again.",
    name: "Jane Smith",
    rating: 4,
  },
  {
    text: "The best online shopping experience I've ever had. Highly recommend!",
    name: "Alice Brown",
    rating: 5,
  },
  {
    text: "Great selection of items and the support team was very helpful.",
    name: "Bob Johnson",
    rating: 4,
  },
];

export const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerSlide = 3;
  const totalSlides = Math.ceil(data.length / cardsPerSlide);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="px-[100px] mt-20 pt-16 pb-[170px]">
      <div className="flex gap-2 justify-between mb-10">
        <p className="font-extrabold text-[44px]">OUR HAPPY CUSTOMERS</p>
        <div className="flex items-center">
          <button onClick={prevSlide}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.3334 27.6667C21.068 27.6679 20.8132 27.5622 20.6267 27.3733L9.96006 16.7067C9.57012 16.3162 9.57012 15.6838 9.96006 15.2933L20.6267 4.62667C21.0207 4.25952 21.6347 4.27035 22.0156 4.65117C22.3964 5.03199 22.4072 5.64599 22.0401 6.04L12.0801 16L22.0401 25.96C22.43 26.3504 22.43 26.9829 22.0401 27.3733C21.8535 27.5622 21.5988 27.6679 21.3334 27.6667Z"
                fill="black"
              />
            </svg>
          </button>
          <button onClick={nextSlide} className="rotate-180">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.3334 27.6667C21.068 27.6679 20.8132 27.5622 20.6267 27.3733L9.96006 16.7067C9.57012 16.3162 9.57012 15.6838 9.96006 15.2933L20.6267 4.62667C21.0207 4.25952 21.6347 4.27035 22.0156 4.65117C22.3964 5.03199 22.4072 5.64599 22.0401 6.04L12.0801 16L22.0401 25.96C22.43 26.3504 22.43 26.9829 22.0401 27.3733C21.8535 27.5622 21.5988 27.6679 21.3334 27.6667Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-3"
          style={{
            transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
            width: `${totalSlides * 100}%`,
          }}
        >
          {data.map((item, index) => (
            <div key={index}>
              <TestimonialCard
                name={item.name}
                text={item.text}
                rating={item.rating}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
