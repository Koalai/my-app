import { Link } from "react-router-dom";

const data = [
  {
    img: "/pages/agency.png",
    text: "Agency Template",
    navigate: "/landing_page_agency",
  },
  {
    img: "/pages/real_estate_1.png",
    text: "Real_estate_1 Template",
    navigate: "/landing_page_real_estate",
  },
  {
    img: "/pages/real_estate_2.png",
    text: "Real_estate_2 Template",
    navigate: "/landing_page_real_estate_2",
  },
  {
    img: "/pages/real_estate_3.png",
    text: "Real_estate_3 Template",
    navigate: "/landing_page_real_estate_3",
  },
  {
    img: "/pages/real_estate_4.png",
    text: "Real estate 4 Template",
    navigate: "/landing_page_real_estate_4",
  },
  {
    img: "/pages/real_estate_5.png",
    text: "Real estate 5 Template",
    navigate: "/landing_page_real_estate_5",
  },
  {
    img: "/pages/ecommerce.png",
    text: "Ecommerce Template",
    navigate: "/landing_page_ecommerce",
  },
  {
    img: "/pages/ecommerce_2.png",
    text: "Ecommerce 2 Template",
    navigate: "/landing_page_ecommerce_2",
  },
];
export const Home = () => {
  return (
    <div className="py-20 px-20 grid grid-cols-4 gap-8">
      {data.map((items, index) => (
        <Link to={items.navigate} key={index}>
          <div className="rounded-lg bg-gray-100 border-[1px] p-4">
            <img
              src={items.img}
              className="h-[350px] rounded-md object-contain"
              alt="project picture"
            />
            <p className="text-2xl font-medium mt-4">{items.text}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
