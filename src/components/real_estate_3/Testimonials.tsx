import { TestimonialCard } from "./TestimonialsCard";

const data = [
  {
    text: "Refit did an incredible job on our kitchen. The craftsmanship was top-notch, and the team was professional from start to finish. Highly recommend!",
    name: "John Doe",
    img: "real_estate_3/avatar1.png",
  },
  {
    text: "Brilliant service from start to finish. The team was professional, communicative, and the results exceeded my expectations. My new bathroom looks amazing!",
    name: "John Doe",
    img: "real_estate_3/avatar2.png",
  },
  {
    text: "I couldn’t be happier with my loft conversion. The attention to detail and quality of work were outstanding. Refit made the whole process smooth and stress-free!",
    name: "John Doe",
    img: "real_estate_3/avatar3.png",
  },
  {
    text: "Refit transformed our outdoor space with a beautiful garden path. The work was completed on time, and the finish is excellent. A great team to work with!",
    name: "Jane Smith",
    img: "real_estate_3/avatar4.png",
  },
  {
    text: "From the first consultation to the final touches, Refit delivered on every promise. Our home extension is exactly what we wanted—spacious, modern, and beautifully finished!",
    name: "Alice Brown",
    img: "real_estate_3/avatar5.png",
  },
  {
    text: "Fantastic workmanship! The team renovated our bathroom with precision and care. It now feels like a luxury space. Would definitely use Refit again.",
    name: "Bob Johnson",
    img: "real_estate_3/avatar5.png",
  },
];

export const Testimonials = () => {
  const infiniteData = [...data, ...data];

  return (
    <div className="mt-[150px] flex flex-col gap-[60px] pb-[40px]">
      <div className="max-w-[1360px] px-8 mx-auto text-center">
        <p className="w-[126px] bg-black text-white text-center pb-1 rounded-3xl mx-auto text-lg">
          Testimonials
        </p>
        <p className="text-[50px]">Hear from our clients</p>
        <p className="text-lg pt-4">
          Hear from our happy clients about their experience working with Refit
          and the quality of our craftsmanship.
        </p>
      </div>
      <div className="w-full overflow-hidden">
        <div
          className="flex gap-8 animate-scroll"
          style={{
            width: `${infiniteData.length * (448 + 32)}px`,
          }}
        >
          {infiniteData.map((item, index) => (
            <TestimonialCard
              text={item.text}
              name={item.name}
              img={item.img}
              index={index}
              key={index}
            />
          ))}
        </div>
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
              index={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
