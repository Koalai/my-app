const data = {
  title: "We are A Digital Agency",
  paragraph:
    "We would direct you to limitless ideas and move your brand into a global landscape.",
};
export const Header = () => {
  return (
    <div
      className="w-full p-0 bg-[url('/intro-bg.jpg')] bg-center bg-no-repeat bg-cover bg-gray-200"
      id="header"
    >
      <div className="bg-black bg-opacity-20">
        <div className="flex flex-wrap">
          <div className="w-full mx-auto pt-80 pb-48 text-center">
            <h1 className="text-white text-6xl font-bold uppercase mt-0 mb-2">
              {data.title}
              <span className="font-extrabold text-blue-400"></span>
            </h1>
            <p className="text-white text-2xl font-light leading-8 mx-auto mb-14 w-5/12">
              {data.paragraph}
            </p>
            <a
              href="#features"
              className="btn btn-custom btn-lg page-scroll inline-block rounded px-6 py-3 text-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
