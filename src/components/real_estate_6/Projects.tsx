import { ProjectCard } from "./ProjectCard";

const data = [
  {
    name: "Coast Villa",
    img: "/real_estate_6/thumbnail1.png",
  },
  { name: "Peak House", img: "/real_estate_6/thumbnail2.png" },
  { name: "Oasis Residence", img: "/real_estate_6/thumbnail3.png" },
  {
    name: "Zen Haven",
    img: "/real_estate_6/thumbnail4.png",
  },
];
export const Projects = () => {
  return (
    <div className="pt-[100px] w-full">
      <div className=" px-10 pb-10 grid grid-cols-2 gap-4">
        {data.map((item, index) => (
          <ProjectCard name={item.name} img={item.img} key={index} />
        ))}
      </div>
    </div>
  );
};
