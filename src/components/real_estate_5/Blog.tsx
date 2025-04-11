import { BlogCard } from "./BlogCard";

const data = [
  {
    img: "real_estate_5/blog_1.png",
    date: "Jan 12, 2022",
    descriptions: "Maximizing Your Rental Property's Potential",
  },
  {
    img: "real_estate_5/blog_2.png",
    date: "Apr 8, 2022",
    descriptions: "The Future of Real Estate Management",
  },
  {
    img: "real_estate_5/blog_3.png",
    date: "Mar 15, 2022",
    descriptions: "Top Tips for Effective Tenant Management",
  },
];

export const Blog = () => {
  return (
    <div className="pt-[130px] px-5">
      <div className="flex flex-col max-w-[1370px] gap-[60px] mx-auto">
        <p className="text-[50px] text-center">Insights and Updates</p>
        <div className="grid grid-cols-3 gap-10 ">
          {data.map((item, index) => (
            <BlogCard
              key={index}
              img={item.img}
              descriptions={item.descriptions}
              date={item.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
