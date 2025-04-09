const PropertyCard = ({
  name,
  price,
  img,
}: {
  name: string;
  price: string;
  img: string;
}) => {
  return (
    <div className="relative h-[360px] w-[384px] rounded-lg overflow-hidden group">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-300  "
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="absolute bottom-0 left-0 right-0 p-4 backdrop-blur-md bg-black bg-opacity-30 text-white group-hover:opacity-0 transition-all duration-300">
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>
      <div className="absolute bottom-4 left-4 right-4 p-4 bg-white bg-opacity-90 text-black flex justify-between items-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 rounded-2xl">
        <div className="border-r-[1px] border-gray-400 w-3/4">
          <h3 className="text-base text-[#707070]">{name}</h3>
          <p className="text-xl font-semibold">{price}</p>
        </div>
        <button className="flex items-center font-medium gap-2">
          View
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
