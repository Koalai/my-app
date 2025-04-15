const data = [
  {
    text: "CRN Law surpassed all my expectations with their exceptional legal representation. Their attentive and professional team navigated my case with skill, ensuring a favorable outcome. I highly recommend CRN Law to anyone seeking top-notch legal services.",
    img: "/law/avatar1.png",
    name: "Mary Kenwood",
    job: "Head of Kenwood Corp.",
  },
  {
    text: "As a marketing executive, I was amazed by the outstanding results achieved through CRN Law's services. Their innovative approach to handling legal matters and their strategic advice have been instrumental in resolving complex issues for our company.",
    img: "/law/avatar2.png",
    name: "John Smith",
    job: "Marketing Executive",
  },
  {
    text: "As a seasoned real estate investor, I've worked with several law firms over the years, but none have impressed me as much as CRN Law. Their deep knowledge of real estate law and attention to detail have been paramount in safeguarding my investments.",
    img: "/law/avatar3.png",
    name: "Michael Anderson",
    job: "Real Estate Investor",
  },
  {
    text: "I am forever grateful to CRN Law for their compassionate guidance during a challenging family law case. Their empathetic and understanding approach helped me navigate a difficult divorce process with minimal stress. Their family law attorneys were not only knowledgeable but also genuinely cared about my well-being and that of my children. ",
    img: "/law/avatar4.png",
    name: "Jennifer Thompson",
    job: "Family Law Client",
  },
];

export const Testimonials = () => {
  return (
    <div className="py-[160px] px-12 flex flex-col gap-16">
      <div className="">
        <p className="text-[19px] text-[#830000]">Listen from our Clients</p>
        <p className="text-[40px] mt-3">Success Stories</p>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-8">
        {data.map((item, index) => (
          <div className="p-10 border-[1px] flex flex-col gap-10" key={index}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#830000"
              viewBox="0 0 256 256"
            >
              <path d="M116,72v88a48.05,48.05,0,0,1-48,48,8,8,0,0,1,0-16,32,32,0,0,0,32-32v-8H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56h60A16,16,0,0,1,116,72ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Z"></path>
            </svg>
            <p>{item.text}</p>
            <div className="flex gap-3 items-center">
              <img
                src={item.img}
                alt="avatar"
                className="h-16 w-16 object-cover rounded-full"
              />
              <div className="flex-col flex gap-1">
                <p className="text-[19px]">{item.name}</p>
                <p className="text-[#830000] ">{item.job}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
