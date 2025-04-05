const catergories = [
  { img: "/ecommerce/cellphone.svg", name: "Phones" },
  { img: "/ecommerce/watch.svg", name: "Watches" },
  { img: "/ecommerce/camera.svg", name: "Cameras" },
  { img: "/ecommerce/headphones.svg", name: "Headphones" },
  { img: "/ecommerce/computer.svg", name: "Computers" },
  { img: "/ecommerce/console.svg", name: "Gaming" },
];
export const Category = () => {
  return (
    <div className="px-28 py-20 flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <p className="font-bold text-lg">Browse By Category</p>
        <div className="flex">
          <img src="/ecommerce/arrow_left.svg" />
          <img src="/ecommerce/arrow_left.svg" className="rotate-180" />
        </div>
      </div>
      <div className="flex gap-8 justify-center">
        {catergories.map((category) => (
          <div className="flex flex-col items-center py-6 px-[52px] gap-2 bg-[#EDEDED] rounded-2xl w-[160px]">
            <img src={category.img} alt={category.name} />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
