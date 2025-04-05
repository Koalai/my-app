import { News } from "./News";

const data = [
  {
    src: "/real_estate/article1.png",
    type: "Apartment",
    time: "March 19, 2024",
    title: "Housing Markets That Changed the Most This Week",
  },
  {
    src: "/real_estate/article2.png",
    type: "Apartment",
    time: "March 19, 2024",
    title: "Read Unveils the Best Canadian Cities for Biking",
  },
  {
    src: "/real_estate/article3.png",
    type: "Office",
    time: "March 19, 2024",
    title: "10 Walkable Cities Where You Can Live Affordably",
  },
  {
    src: "/real_estate/article4.png",
    type: "Shop",
    time: "March 19, 2024",
    title: "New Apartment Nice in the BestCanadian Cities",
  },
];

export const ArticleNews = () => {
  return (
    <div className="mt-20 py-16 text-center bg-[#F9F9F9]">
      <p className="text-2xl font-semibold">Recent Articles & News</p>
      <p className="text-xs mt-4 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="grid grid-cols-4 px-20 gap-8">
        <News data={data} />
      </div>
    </div>
  );
};
