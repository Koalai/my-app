import { TestimonialCard } from "./TestimonialCard";

const data = [
  {
    text: "Refit did an incredible job on our kitchen. The craftsmanship was top-notch, and the team was professional from start to finish. Highly recommend!",
    name: "John Doe",
    img: "real_estate_5/avatar1.png",
  },
  {
    text: "Brilliant service from start to finish. The team was professional, communicative, and the results exceeded my expectations. My new bathroom looks amazing!",
    name: "John Doe",
    img: "real_estate_5/avatar2.png",
  },
  {
    text: "I couldn’t be happier with my loft conversion. The attention to detail and quality of work were outstanding. Refit made the whole process smooth and stress-free!",
    name: "John Doe",
    img: "real_estate_5/avatar3.png",
  },
  {
    text: "Refit transformed our outdoor space with a beautiful garden path. The work was completed on time, and the finish is excellent. A great team to work with!",
    name: "Jane Smith",
    img: "real_estate_5/avatar4.png",
  },
  {
    text: "From the first consultation to the final touches, Refit delivered on every promise. Our home extension is exactly what we wanted—spacious, modern, and beautifully finished!",
    name: "Alice Brown",
    img: "real_estate_5/avatar5.png",
  },
  {
    text: "Fantastic workmanship! The team renovated our bathroom with precision and care. It now feels like a luxury space. Would definitely use Refit again.",
    name: "Bob Johnson",
    img: "real_estate_5/avatar6.png",
  },
];

const infiniteData = [...data, ...data];

export const Testimonials = () => {
  return (
    <div className="pt-[130px] flex flex-col gap-[100px] pb-8">
      <p className="text-[50px] font-medium text-center">What Our Client Say</p>
      <div
        className="flex gap-8 animate-scroll-reverse mt-8"
        style={{
          width: `${infiniteData.length * (448 + 32)}px`,
        }}
      >
        {infiniteData.map((item, index) => (
          <TestimonialCard
            text={item.text}
            name={item.name}
            img={item.img}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
