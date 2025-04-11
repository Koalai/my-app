import { BlogCard } from "../../components/real_estate_5/BlogCard";
import { CTA } from "../../components/real_estate_5/CTA";
import { Footer } from "../../components/real_estate_5/Footer";
import { Navbar } from "../../components/real_estate_5/Navbar";

const data = [
  {
    img: "/real_estate_5/blog_1.png",
    date: "Jan 12, 2022",
    descriptions: "Maximizing Your Rental Property's Potential",
    tag: "Marketing",
  },
  {
    img: "/real_estate_5/blog_2.png",
    date: "Apr 8, 2022",
    descriptions: "The Future of Real Estate Management",
    tag: "Trends",
  },
  {
    img: "/real_estate_5/blog_3.png",
    date: "Mar 15, 2022",
    descriptions: "Top Tips for Effective Tenant Management",
    tag: "Trends",
  },
  {
    img: "/real_estate_5/blog_1.png",
    date: "Jan 12, 2022",
    descriptions: "Maximizing Your Rental Property's Potential",
    tag: "Marketing",
  },
  {
    img: "/real_estate_5/blog_2.png",
    date: "Apr 8, 2022",
    descriptions: "The Future of Real Estate Management",
    tag: "Trends",
  },
  {
    img: "/real_estate_5/blog_3.png",
    date: "Mar 15, 2022",
    descriptions: "Top Tips for Effective Tenant Management",
    tag: "Technology",
  },
];

export const BlogPage = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-[60px] px-5">
        <div className="flex flex-col max-w-[1370px] gap-[60px] mx-auto">
          <div className="w-[754px] mx-auto text-center">
            <p className="text-[50px] text-center">Insights and Updates</p>
            <p className="text-xl ">
              Explore in-depth articles, expert tips, and the latest industry
              trends to help you make the most of our SaaS solutions and stay
              ahead in your field.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-10 ">
            {data.map((item, index) => (
              <BlogCard
                key={index}
                img={item.img}
                descriptions={item.descriptions}
                date={item.date}
                tag={item.tag}
              />
            ))}
          </div>
        </div>
      </div>
      <CTA />
      <Footer />
    </div>
  );
};
