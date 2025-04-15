import { useState } from "react";

const data = [
  {
    text: "How do you protect client rights?",
    descriptions:
      "Protecting client rights is one of our core principles. We are dedicated to advocating for our clients' best interests and diligently safeguarding their rights. We represent our clients fairly and effectively throughout legal processes to help them achieve successful outcomes.",
  },
  {
    text: "What are your achievements in handling legal matters?",
    descriptions:
      "CRN Law Firm has achieved success in a diverse range of legal matters. We have protected clients' intellectual property rights, providing them with a competitive advantage. Additionally, we have obtained favorable results in commercial litigations and offered support in complex real estate transactions. In family law, we have provided emotional and legal assistance to our clients. Our achievements are a result of our focus on clients, the expertise of our team, and our determination to deliver favorable outcomes.",
  },
  {
    text: "How do you handle sensitive family law matters with care?",
    descriptions:
      "We understand the sensitive nature of family law cases. Our compassionate team at CRN Law Firm approaches such matters with empathy and discretion, providing emotional support while working diligently to achieve the best possible outcomes for our clients and their families.",
  },
];

export const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="py-[160px] px-12 border-t-[1px] flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <p className="text-[19px] text-[#830000]">Frequently Asked Questions</p>
        <p className="text-[40px]">We Answered All</p>
      </div>
      <div className="flex flex-col gap-10">
        {data.map((item, index) => (
          <div className="flex pb-5 flex-col gap-2 border-b-[1px] " key={index}>
            <div
              className="flex items-center cursor-pointer"
              onClick={() => toggleExpand(index)}
            >
              <p className="text-[28px] flex-1">{item.text}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#000000"
                viewBox="0 0 256 256"
                className={`transform transition-transform duration-500 ease-in-out ${
                  expandedIndex === index ? "rotate-45" : "rotate-0"
                }`}
              >
                <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
              </svg>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedIndex === index
                  ? "max-h-90 opacity-100 pb-4"
                  : "max-h-0 opacity-0 pb-0"
              }`}
            >
              <p className="text-[#696969] w-2/5">{item.descriptions}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
