import { ProductCard } from "./ProductCard";

const data = [
  {
    img: "/ecommerce/shirt.png",
    name: "Checkered Shirt",
    price: "$212",
    rating: 5,
  },
  {
    img: "/ecommerce/jean.png",
    name: "Skinny Fit Jean",
    price: "$240",
    rating: 4,
  },
  {
    img: "/ecommerce/tshirt_2.png",
    name: "Sleeve Striped T-shirt",
    price: "$180",
    rating: 4.5,
  },
  {
    img: "/ecommerce/tshirt.png",
    name: "T-shirt with tape details",
    price: "130",
    rating: 3.5,
  },
];
export const NewArrivals = () => {
  return (
    <div className="px-20 py-16 flex flex-col items-center gap-20 border-b-[1px] border-black border-opacity-10">
      <p className="text-6xl font-extrabold uppercase ">New Arrivals</p>
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
  );
};
