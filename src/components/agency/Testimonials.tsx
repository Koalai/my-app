const data = [
  {
    img: "testimonials/01.jpg",
    text: '"We have seen incredible results since partnering with Innovate Solutions. Their ability to understand our needs and deliver exceptional outcomes is truly impressive."',
    name: "James Rodriguez",
  },
  {
    img: "testimonials/02.jpg",
    text: '"The professionalism and creativity of Innovate Solutions truly impressed us. They transformed our ideas into reality with precision and delivered on time."',
    name: "Michael Carter",
  },
  {
    img: "testimonials/03.jpg",
    text: '"I could not be happier with the results! Innovate Solutions provided a tailored solution that perfectly fit our needs, and their attention to detail was remarkable."',
    name: "Emily Davis",
  },
  {
    img: "testimonials/04.jpg",
    text: '"Innovate Solutions made the entire process so smooth and stress-free. Their expertise and dedication to quality are unmatched. Highly recommend!"',
    name: "David Nguyen",
  },
  {
    img: "testimonials/05.jpg",
    text: '"The team at Innovate Solutions went above and beyond to ensure our project was a success. Their innovative approach and excellent communication made all the difference."',
    name: "Laura Bennett",
  },
  {
    img: "testimonials/06.jpg",
    text: '"We have seen incredible results since partnering with Innovate Solutions. Their ability to understand our needs and deliver exceptional outcomes is truly impressive."',
    name: "Johnathan Doe",
  },
];
export const Testimonials = () => {
  return (
    <div id="testimonials" className="py-[100px] bg-[#f6f6f6]">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">What our clients say</h2>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {data.map((d, i) => (
            <div key={`${d.name}-${i}`} className="p-5">
              <div className="flex">
                <div className="mr-[15px] flex-shrink-0">
                  <img
                    src={d.img}
                    alt=""
                    className="w-[64px] h-[64px] rounded-full block"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-[14px] italic mb-0">{d.text}</p>
                  <div className="mt-[10px] text-[15px] font-semibold text-[#666]">
                    - {d.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
