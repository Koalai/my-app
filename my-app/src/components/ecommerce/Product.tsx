import { useState } from "react";
import { ProductCard } from "./ProductCard";

const data = [
  {
    img: "/ecommerce/product_sample.png",
    name: "Iphone 14 Pro",
    price: "$999",
  },
  {
    img: "/ecommerce/product_sample.png",
    name: "Iphone 14 Pro",
    price: "$999",
  },
  {
    img: "/ecommerce/product_sample.png",
    name: "Iphone 14 Pro",
    price: "$999",
  },
  {
    img: "/ecommerce/product_sample.png",
    name: "Iphone 14 Pro",
    price: "$999",
  },
  {
    img: "/ecommerce/product_sample.png",
    name: "Iphone 14 Pro",
    price: "$999",
  },
  {
    img: "/ecommerce/product_sample.png",
    name: "Iphone 14 Pro",
    price: "$999",
  },
  {
    img: "/ecommerce/product_sample.png",
    name: "Iphone 14 Pro",
    price: "$999",
  },
  {
    img: "/ecommerce/product_sample.png",
    name: "Iphone 14 Pro",
    price: "$999",
  },
];

export const Product = () => {
  const [activeTab, setActiveTab] = useState("New Arrival");
  return (
    <div className="px-40 py-[56px] flex flex-col gap-8">
      <div className="flex gap-8">
        <button
          onClick={() => setActiveTab("New Arrival")}
          className={` text-sm font-bold  pb-1 ${
            activeTab === "New Arrival"
              ? "border-b-2 border-black"
              : "text-[#8B8B8B]"
          } `}
        >
          New Arrival
        </button>

        <button
          onClick={() => setActiveTab("Best Seller")}
          className={` text-sm font-bold pb-1 ${
            activeTab === "Best Seller"
              ? "border-b-2 border-black"
              : "text-[#8B8B8B]"
          }`}
        >
          Best Seller
        </button>

        <button
          onClick={() => setActiveTab("Featured Products")}
          className={` text-sm font-bold pb-1 ${
            activeTab === "Featured Products"
              ? "border-b-2 border-black"
              : "text-[#8B8B8B]"
          }`}
        >
          Featured Products
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {data.map((item, index) => (
          <ProductCard
            key={index}
            img={item.img}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};
