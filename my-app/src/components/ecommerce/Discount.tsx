import { ProductCard } from "./ProductCard";

const data = [
  {
    img: "/ecommerce/product_sample_7.png",
    name: "AirPods Max Silver Starlight Aluminium ",
    price: "$549",
  },
  {
    img: "/ecommerce/product_sample_8.png",
    name: "Galaxy Buds FE Graphite",
    price: "$79",
  },
  {
    img: "/ecommerce/product_sample_9.png",
    name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium ",
    price: "$399",
  },
  {
    img: "/ecommerce/product_sample_10.png",
    name: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
    price: "$1437",
  },
];
export const Discount = () => {
  return (
    <div className="px-40 py-20">
      <p className="font-medium text-lg">Discounts up to -50%</p>
      <div className="grid grid-cols-4 gap-4 mt-10">
        {data.map((item, index) => (
          <ProductCard
            key={index}
            img={item.img}
            price={item.price}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
};
