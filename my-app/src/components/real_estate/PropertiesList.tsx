import { useRef, useState } from "react";
import { PropertyCard } from "./PropertyCard";

// Định nghĩa kiểu cho dữ liệu
interface Property {
  src: string;
  price: string;
  name: string;
  address: string;
}

const data: Property[] = [
  {
    src: "/real_estate/house_s1.png",
    price: "$280,000",
    name: "Skyper Pool Apartment",
    address: "1020 Bloomingdale Ave",
  },
  {
    src: "/real_estate/house_s2.png",
    price: "$386,000",
    name: "North Dillard Street",
    address: "4330 Bell Shoals Rd",
  },
  {
    src: "/real_estate/house_s3.png",
    price: "$180,000",
    name: "Eaton Garth Penthouse",
    address: "7722 18th Ave, Brooklyn",
  },
  {
    src: "/real_estate/house_s3.png",
    price: "$180,000",
    name: "Eaton Garth Penthouse",
    address: "7722 18th Ave, Brooklyn",
  },
  {
    src: "/real_estate/house_s3.png",
    price: "$180,000",
    name: "Eaton Garth Penthouse",
    address: "7722 18th Ave, Brooklyn",
  },
  {
    src: "/real_estate/house_s3.png",
    price: "$180,000",
    name: "Eaton Garth Penthouse",
    address: "7722 18th Ave, Brooklyn",
  },
];

export const PropertiesList = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number): void => {
    setCurrentIndex(index);
    if (scrollRef.current) {
      const targetSlide = scrollRef.current.children[index] as HTMLElement;
      scrollRef.current.scrollTo({
        left: targetSlide.offsetLeft - scrollRef.current.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = (): void => {
    const newIndex = currentIndex === 0 ? data.length - 1 : currentIndex - 1;
    scrollToIndex(newIndex);
  };

  const handleNext = (): void => {
    const newIndex = currentIndex === data.length - 1 ? 0 : currentIndex + 1;
    scrollToIndex(newIndex);
  };

  return (
    <div className="mt-[100px] pt-[100px] pb-[80px] rounded-xl bg-[#F9F9F9]">
      <div className="flex flex-col gap-2 items-center">
        <p className="font-semibold text-3xl">Homes for you</p>
        <p>Based on your view history</p>
      </div>
      <div className="relative mt-8 px-[80px]">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-2"
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="snap-center flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2"
            >
              <PropertyCard item={item} />
            </div>
          ))}
        </div>
        <button
          onClick={handlePrev}
          className="absolute left-4 top-[40%] transform -translate-y-1/2 bg-[#FFFFFF] px-2 rounded-full border-[1px]"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-[40%] transform -translate-y-1/2 bg-[#FFFFFF] px-2 rounded-full"
        >
          →
        </button>
        <div className="flex justify-center mt-6   gap-2">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-gray-800" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};
