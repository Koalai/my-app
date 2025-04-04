import { Banner } from "./Banner";

const data = [
  {
    img: "/ecommerce/product_sample_3.png",
    name: "Popular Products",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
  },
  {
    img: "/ecommerce/product_sample_2.png",
    name: "Ipad Pro",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    fill: "#F5F5F5",
  },
  {
    img: "/ecommerce/product_sample_4.png",
    name: "Samsung Galaxy   ",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
  },
  {
    img: "/ecommerce/product_sample_5.png",
    name: "Macbook Pro",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    fill: "#F5F5F5",
  },
];
export const BannersList = () => {
  return (
    <div className="grid grid-cols-4">
      {data.map((item, index) => (
        <Banner
          key={index}
          name={item.name}
          img={item.img}
          description={item.description}
          fill={item.fill}
        />
      ))}
    </div>
  );
};
