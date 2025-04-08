import { useState } from "react";

const data = [
  { icon: "/real_estate_3/kitchen.png", room: "Kitchens" },
  { icon: "/real_estate_3/bath.png", room: "Bathrooms" },
  { icon: "/real_estate_3/paint.png", room: "Restorations" },
  { icon: "/real_estate_3/garage.png", room: "Extensions" },
  { icon: "/real_estate_3/stair.png", room: "Loft Conversions" },
  { icon: "/real_estate_3/bricks.png", room: "External Works" },
];

export const Services = () => {
  const [isExpanded, setIsExpanded] = useState<number>(-1); // -1 nghĩa là không có mục nào mở

  const toggleExpand = (index: number) => {
    setIsExpanded((prev) => (prev === index ? -1 : index)); // Nếu đang mở thì đóng, ngược lại mở
  };

  return (
    <div className="py-[100px]">
      <div className="flex flex-col items-center gap-[60px] justify-center max-w-[1360px] px-8 mx-auto">
        <div className="text-center">
          <p className="w-[92px] bg-black text-white text-center pb-1 rounded-3xl mx-auto text-lg">
            Services
          </p>
          <p className="text-[50px]">What we do</p>
          <p className="text-lg pt-4">
            Find out which one of our services fit the needs of your project
          </p>
        </div>
        <div className="flex gap-[54px] w-full">
          <img
            src="/real_estate_3/service_sample.png"
            alt="room"
            className="h-[686px] rounded-lg"
          />
          <div className="flex flex-col justify-center w-1/2">
            {data.map((item, index) => (
              <div
                key={index}
                className="border-b-[1px] cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <div className="flex items-center justify-between py-5">
                  <div className="flex items-center">
                    <img
                      src={item.icon}
                      alt={`${item.room} icon`}
                      className="h-[40px] w-[40px]"
                    />
                    <p className="text-2xl pl-4">{item.room}</p>
                  </div>
                  <button
                    onClick={() => toggleExpand(index)}
                    className="text-3xl"
                  >
                    {isExpanded === index ? "−" : "+"}
                  </button>
                </div>
                <p
                  className={`pr-[60px] pb-[30px] text-xl font-light transition-all duration-300 ${
                    isExpanded === index
                      ? "block animate-slide-down"
                      : "animate-slide-up hidden"
                  }`}
                >
                  At Refit, we design and build stunning tailored to your style
                  and needs. Whether you're after a sleek modern space or a
                  classic, timeless look, our expert team delivers high-quality
                  craftsmanship, functionality, and attention to detail to
                  create the heart of your home.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
