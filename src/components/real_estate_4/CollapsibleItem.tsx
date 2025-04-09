import { useState } from "react";

export const CollapsibleItem = ({
  number,
  title,
  description,
  isOpenByDefault = false,
  hasIcon,
}: {
  number?: string;
  title: string;
  description: string;
  isOpenByDefault: boolean;
  hasIcon?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(isOpenByDefault);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`p-6 flex gap-4 border-b-[1px] pl-0 last:border-none`}>
      {number && <p className="text-xl font-medium text-[#707070]">{number}</p>}
      <div className="w-full">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={toggleOpen}
        >
          <p className="text-xl font-medium">{title}</p>
          {hasIcon && (
            <svg
              className={`w-6 h-6 transform transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-40 mt-3" : "max-h-0 mt-0"
          }`}
        >
          <p className="text-[#707070]">{description}</p>
        </div>
      </div>
    </div>
  );
};
