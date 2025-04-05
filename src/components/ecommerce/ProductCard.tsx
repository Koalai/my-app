import { useState } from "react";

export const ProductCard = ({
  name,
  price,
  img,
}: {
  name: string;
  price: string;
  img: string;
}) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="px-4 py-6 rounded-lg bg-[#F6F6F6] flex flex-col gap-2 items-center">
      <div
        className={`ml-auto ${
          isLiked ? "text-red-500 stroke-none" : "text-[#F6F6F6]"
        }`}
        onClick={() => setIsLiked(!isLiked)}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.93424 18.5443L15.3153 27.3569C15.6398 27.6616 15.802 27.814 16 27.814C16.198 27.814 16.3602 27.6616 16.6847 27.3569L26.0658 18.5443C28.674 16.0942 28.9907 12.0622 26.7971 9.2348L26.3846 8.70316C23.7604 5.32081 18.4928 5.88806 16.6489 9.75157C16.3884 10.2973 15.6116 10.2973 15.3511 9.75157C13.5072 5.88806 8.23964 5.32081 5.6154 8.70316L5.20293 9.2348C3.00927 12.0622 3.32601 16.0942 5.93424 18.5443Z"
            stroke={isLiked ? "none" : "#919191"}
            stroke-opacity={isLiked ? "0" : "0.77"}
            stroke-width={isLiked ? "0" : "1.4"}
          />
        </svg>
      </div>

      <img src={img} alt="product sample" className="w-[160px] h-[160px] " />
      <p className="font-medium flex-1 text-center">{name}</p>
      <p className="font-bold text-lg">{price}</p>
      <button className="text-white bg-black px-12 py-2 rounded-lg">
        Buy Now
      </button>
    </div>
  );
};
