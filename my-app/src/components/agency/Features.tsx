const data = [
  {
    icon: "fa-solid fa-comments",
    title: "Social Content",
    text: "This is a wider card with supporting text below as a natural content.",
  },
  {
    icon: "fa-solid fa-table-list",
    title: "Brand Identity",
    text: "This is a wider card with supporting text below as a natural content.",
  },
  {
    icon: "fa-solid fa-magnifying-glass",
    title: "SEO Services",
    text: "This is a wider card with supporting text below as a natural content.",
  },
  {
    icon: "fa-solid fa-filter",
    title: "Optimize conversions",
    text: "This is a wider card with supporting text below as a natural content.",
  },
  {
    icon: "fa-solid fa-user-group",
    title: "Collaborate with Your Team",
    text: "This is a wider card with supporting text below as a natural content.",
  },
  {
    icon: "fa fa-magic",
    title: "Create and Edit Content Easily",
    text: "This is a wider card with supporting text below as a natural content.",
  },
];

export const Features = () => {
  return (
    <div id="features" className="bg-gray-100 text-center py-2">
      <div className="w-full md:w-10/12 mx-auto mb-16">
        <h2 className="mt-2 mb-4 pb-4 text-3xl font-bold after:content-[''] after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-gradient-to-r after:from-blue-400 after:to-blue-500">
          Features
        </h2>
      </div>
      <div className="grid grid-cols-3 px-60 gap-4">
        {data.map((d, i) => (
          <div key={`${d.title}-${i}`} className="flex flex-col items-center ">
            <i
              className={`${d.icon} text-4xl mb-5 text-white w-24 h-24 py-7 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 shadow-lg transition-all duration-500`}
            ></i>
            <h3 className="text-xl font-semibold">{d.title}</h3>
            <p className="text-gray-600 w-8/12">{d.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
