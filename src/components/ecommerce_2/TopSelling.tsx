import { ProductCard } from "./ProductCard";

const data = [
  {
    img: "/ecommerce/shirt_3.png",
    name: "Vertical Striped Shirt",
    price: "$212",
    rating: 5,
  },
  {
    img: "/ecommerce/jean_2.png",
    name: "Fade Skinny Jean",
    price: "$200",
    rating: 4,
  },
  {
    img: "/ecommerce/tshirt_3.png",
    name: "Courage Graphic T-shirt",
    price: "$145",
    rating: 4.5,
  },
  {
    img: "/ecommerce/short.png",
    name: "Loose Fit Bermuda Short",
    price: "80",
    rating: 3.5,
  },
];

export const TopSelling = () => {
  return (
    <div>
      <div className="px-20 py-16 flex flex-col items-center gap-20 border-b-[1px] border-black border-opacity-10">
        <p className="text-6xl font-extrabold uppercase ">Top Selling</p>
        <div className="grid grid-cols-4 gap-3 ">
          {data.map((item) => (
            <ProductCard
              img={item.img}
              name={item.name}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
        <button className="px-[54px] py-3 rounded-3xl border-[1px] border-opacity-10 text-sm font-semibold">
          View All
        </button>
      </div>
    </div>
  );
};
