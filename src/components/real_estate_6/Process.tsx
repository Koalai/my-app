import { ProcessCard } from "./ProcessCard";

const data = [
  {
    title: "Schematic Design",
    descriptions: "Where a preliminary design is created",
  },
  {
    title: "Design Development",
    descriptions: "Where details of the design are fleshed out",
  },
  {
    title: "Construction Documents",
    descriptions: "Where detailed drawings and specifications are created",
  },
  {
    title: "Construction Administration",
    descriptions:
      "Where the building is overseen during construction to ensure it is built according to the design",
  },
];

export const Process = () => {
  return (
    <div className="pt-[100px] px-10">
      <div className="flex gap-4">
        <div className="flex flex-col gap-6 pl-4 w-1/2 items-start">
          <p className="text-[40px]">How we manage our work?</p>
          <p className="w-3/4">
            We are a team of passionate architects, designers, and engineers
            dedicated to creating innovative and sustainable designs for our
            clients. Our company specializes in designing residential homes,
            commercial buildings, and public spaces that are functional,
            beautiful, and tailored to meet our clients' needs. We work closely
            with our clients throughout the design process, from concept
            development to construction, to ensure that their vision is brought
            to life.
          </p>
          <button className="rounded-lg border-[1px] border-black py-4 px-6 hover:bg-black hover:text-white">
            About us
          </button>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          {data.map((item, index) => (
            <ProcessCard
              title={item.title}
              descriptions={item.descriptions}
              index={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
