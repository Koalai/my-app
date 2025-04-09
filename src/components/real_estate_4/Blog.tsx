const data = [
  "/real_estate_4/blog_img_1.png",
  "/real_estate_4/blog_img_2.png",
  "/real_estate_4/blog_img_3.png",
];

export const Blog = () => {
  return (
    <div className="px-4 py-20 ">
      <div className="max-w-[1200px] flex flex-col gap-[62px] mx-auto">
        <div className="flex gap-4 items-center">
          <p className="text-[38px] font-medium ">
            Discover insights, trends, and inspiration.
          </p>
          <div className="flex gap-8 flex-col w-1/2">
            <p className="text-[#707070]">
              Explore a handpicked collection of stunning homes that reflect
              timeless design, innovative architecture, and unparalleled luxury.
            </p>
            <button className="flex gap-2 text-base items-center">
              View all
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
        <div className="flex gap-6 w-full">
          {data.map((item, index) => (
            <img
              src={item}
              key={index}
              className="h-[400px] w-[384px] rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
