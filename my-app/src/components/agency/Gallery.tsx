import { Image } from "./Image";

const data = [
  {
    title: "App Design",
    smallImage: "portfolio/01-small.jpg",
  },
  {
    title: "Website Design",
    smallImage: "portfolio/02-small.jpg",
  },
  {
    title: "Web Development",
    smallImage: "portfolio/03-small.jpg",
  },
  {
    title: "Logo Design",
    smallImage: "portfolio/04-small.jpg",
  },
  {
    title: "Graphic Design",
    smallImage: "portfolio/05-small.jpg",
  },
  {
    title: "Cyber Security",
    smallImage: "portfolio/06-small.jpg",
  },
  {
    title: "Server Management",
    smallImage: "portfolio/07-small.jpg",
  },
  {
    title: "App Design",
    smallImage: "portfolio/08-small.jpg",
  },
  {
    title: "App Design",
    smallImage: "portfolio/09-small.jpg",
  },
];

export const Gallery = () => {
  return (
    <div id="portfolio" className="py-24 text-center">
      <div className="container mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-bold">Gallery</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="grid grid-cols-3">
          {data.map((d, i) => (
            <div key={`${d.title}-${i}`} className="">
              <Image title={d.title} smallImage={d.smallImage} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
