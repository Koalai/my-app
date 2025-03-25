const data = [
  {
    img: "team/01.jpg",
    name: "John Doe",
    job: "Director",
  },
  {
    img: "team/02.jpg",
    name: "Mike Doe",
    job: "Senior Designer",
  },
  {
    img: "team/03.jpg",
    name: "Jane Doe",
    job: "Senior Designer",
  },
  {
    img: "team/04.jpg",
    name: "Karen Doe",
    job: "Project Manager",
  },
];
export const Team = () => {
  return (
    <div id="team" className="py-[100px] text-center">
      <div className="container mx-auto">
        <div className="md:w-2/3 mx-auto mb-8">
          <h2 className="text-3xl font-bold">Meet the Team</h2>
          <p className="text-gray-600">
            We create engaging experiences that are innovatingand beautiful.
          </p>
        </div>
        <div className="grid grid-cols-4  gap-4">
          {data.map((d, i) => (
            <div key={`${d.name}-${i}`} className="team">
              <div className="bg-transparent border-0">
                <img src={d.img} alt="..." className="w-[240px] mx-auto" />
                <div className="pt-[10px] text-[#888]">
                  <h4 className="my-[5px] text-xl font-semibold">{d.name}</h4>
                  <p>{d.job}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
