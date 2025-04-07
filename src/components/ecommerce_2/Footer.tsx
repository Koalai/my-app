const company = ["About", "Features", "Works", "Career"];
const help = [
  "Customer Support",
  "Delivery Details",
  "Terms & Conditions",
  "Privacy Policy",
];
const FAQ = ["Account", "Manage Deliveries", "Orders", "Payment"];
const resources = [
  "Free Ebooks",
  "Development Tutorial",
  "How to Blog",
  "Youtube Playlist",
];

const img = [
  { src: "/ecommerce/visa.png", alt: "visa" },
  { src: "/ecommerce/masterCard.png", alt: "mastercard" },
  { src: "/ecommerce/paypal.png", alt: "paypal" },
  { src: "/ecommerce/applePay.png", alt: "apple pay" },
  { src: "/ecommerce/googlePay.png", alt: "google pay" },
];
export const Footer = () => {
  return (
    <div className="px-[100px] bg-[#F0F0F0] pb-20 pt-[140px] relative">
      <div className="flex justify-between border-b-2 border-opacity-10 pb-10">
        <div className="flex flex-col gap-4 w-1/5">
          <img
            src="/ecommerce/logo_ecommerce2_dark.png"
            alt="logo"
            className="w-[167px] h-[22px]"
          />
          <p className="text-[14px] leading-[22px] opacity-60">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div className="flex mt-6 w-[176px] gap-8">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16 2.91193C15.4121 3.17965 14.7791 3.3607 14.1152 3.4416C14.7932 3.02556 15.3135 2.36588 15.5586 1.58004C14.9238 1.96525 14.2222 2.2455 13.4728 2.39573C12.8755 1.74183 12.0218 1.3335 11.0771 1.3335C9.26548 1.3335 7.79574 2.84066 7.79574 4.69933C7.79574 4.9632 7.82391 5.21938 7.88026 5.46592C5.15208 5.32531 2.73381 3.98668 1.11381 1.94792C0.831132 2.44677 0.669596 3.02556 0.669596 3.64191C0.669596 4.80912 1.24905 5.83958 2.12995 6.4434C1.59277 6.42703 1.08563 6.27391 0.642365 6.02352V6.06493C0.642365 7.69632 1.77402 9.0571 3.27663 9.36527C3.00147 9.44424 2.71128 9.48373 2.41169 9.48373C2.20039 9.48373 1.99378 9.46351 1.79374 9.42402C2.21166 10.7607 3.42313 11.7344 4.86001 11.7604C3.7368 12.6637 2.32059 13.202 0.783234 13.202C0.518398 13.202 0.256383 13.1866 0 13.1558C1.45284 14.1092 3.17896 14.6668 5.03187 14.6668C11.0705 14.6668 14.3715 9.53862 14.3715 5.09033C14.3715 4.94394 14.3687 4.79756 14.3631 4.65407C15.0045 4.17929 15.5614 3.58702 16 2.91193Z"
                fill="black"
              />
            </svg>
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.18082 3.81794C9.18082 3.98169 9.18082 4.51541 9.18082 5.27366H11.7878L11.5052 7.59763H9.18082C9.18082 11.1816 9.18082 15.9843 9.18082 15.9843H6.09563C6.09563 15.9843 6.09563 11.2452 6.09563 7.59763H4.48804V5.27366H6.09563C6.09563 4.35204 6.09563 3.69669 6.09563 3.51422C6.09563 2.64485 6.03013 2.23235 6.39954 1.55866C6.76913 0.885005 7.81163 -0.00543266 9.61472 0.0160048C11.4183 0.0382236 12.1785 0.211724 12.1785 0.211724L11.7878 2.6885C11.7878 2.6885 10.6362 2.38441 10.0709 2.49279C9.50635 2.60119 9.18082 2.94894 9.18082 3.81794Z"
                fill="black"
              />
            </svg>

            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5504 3.358C11.891 2.59144 11.5456 1.60104 11.5731 0.592723L9.10925 0.533203C9.10925 0.533203 9.10925 0.638323 9.10925 0.780083V10.6602C9.14365 13.786 4.20509 13.7102 4.59581 10.2551C4.83469 8.88136 6.31085 8.03592 7.62253 8.51384V5.99992C4.76685 5.50264 2.06061 7.7756 2.08909 10.6713C2.33869 16.9513 11.3461 16.9521 11.596 10.6713C11.5331 10.4465 11.5683 6.26152 11.5593 5.90856C12.6796 6.60568 13.9832 6.95416 15.3033 6.90952V4.3132C14.0829 4.3132 13.1515 3.98872 12.5504 3.358Z"
                fill="black"
              />
            </svg>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_28_1157)">
                <path
                  d="M7.99992 14.6667C6.57042 14.6667 5.54174 14.666 4.73972 14.5882C3.94689 14.5114 3.43972 14.3637 3.03497 14.1093C2.57237 13.8187 2.1812 13.4276 1.89052 12.965C1.63628 12.5602 1.4885 12.0531 1.41174 11.2602C1.33396 10.4582 1.33325 9.42954 1.33325 8.00004C1.33325 6.57055 1.33396 5.54186 1.41174 4.73984C1.4885 3.94701 1.63628 3.43984 1.89052 3.03509C2.18119 2.57248 2.57236 2.18131 3.03497 1.89065C3.43972 1.6364 3.94689 1.48863 4.73972 1.41186C5.54164 1.33408 6.57032 1.33337 7.99992 1.33337C9.42941 1.33337 10.4581 1.33408 11.2601 1.41186C12.0529 1.48863 12.5601 1.6364 12.9649 1.89065C13.4274 2.18132 13.8186 2.57249 14.1092 3.03509C14.3636 3.43984 14.5112 3.94701 14.5881 4.73984C14.6659 5.54186 14.6666 6.57055 14.6666 8.00004C14.6666 9.42954 14.6659 10.4582 14.5881 11.2602C14.5112 12.0531 14.3636 12.5602 14.1092 12.965C13.8186 13.4276 13.4274 13.8187 12.9649 14.1093C12.5601 14.3637 12.0529 14.5114 11.2601 14.5882C10.4581 14.666 9.42941 14.6667 7.99992 14.6667Z"
                  fill="white"
                  stroke="white"
                  stroke-width="2"
                />
                <path
                  d="M7.99992 11.3333C9.47268 11.3333 10.6666 10.1394 10.6666 8.66667C10.6666 7.19391 9.47268 6 7.99992 6C6.52716 6 5.33325 7.19391 5.33325 8.66667C5.33325 10.1394 6.52716 11.3333 7.99992 11.3333Z"
                  fill="white"
                  stroke="black"
                  stroke-width="2"
                />
                <path
                  d="M11.25 5.5C11.6642 5.5 12 5.16421 12 4.75C12 4.33579 11.6642 4 11.25 4C10.8358 4 10.5 4.33579 10.5 4.75C10.5 5.16421 10.8358 5.5 11.25 5.5Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_28_1157">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div>
          <h2 className="text-[16px] leading-[18px] font-medium mb-4 uppercase">
            Company
          </h2>
          <ul className="space-y-2">
            {company.map((item, index) => (
              <li key={index} className="opacity-60 text-base">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-[16px] leading-[18px] font-medium mb-4 uppercase">
            Help
          </h2>
          <ul className="space-y-2">
            {help.map((item, index) => (
              <li key={index} className="opacity-60 text-base">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-[16px] leading-[18px] font-medium mb-4 uppercase">
            FAQ
          </h2>
          <ul className="space-y-2">
            {FAQ.map((item, index) => (
              <li key={index} className="opacity-60 text-base">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-[16px] leading-[18px] font-medium mb-4 uppercase">
            Resources
          </h2>
          <ul className="space-y-2">
            {resources.map((item, index) => (
              <li key={index} className="opacity-60 text-base">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-between pt-5  items-center">
        <p className="text-sm opacity-60">
          Shop.co © 2000-2021, All rights reserved
        </p>
        <div className="flex gap-1">
          {img.map((item) => (
            <img src={item.src} alt={item.alt} className="h-[40px]" />
          ))}
        </div>
      </div>
      <div
        className="px-16 py-9 rounded-[20px] bg-black flex justify-between absolute top-[-90px]"
        style={{ width: "calc(100% - 200px)" }}
      >
        <p className="text-[40px] font-extrabold text-white w-[550px]">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </p>
        <div className="flex flex-col w-[350px] gap-3">
          <div className="rounded-[62px] bg-white flex px-4 py-3 gap-2 ">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 4.125H3C2.70163 4.125 2.41548 4.24353 2.2045 4.4545C1.99353 4.66548 1.875 4.95163 1.875 5.25V18C1.875 18.4973 2.07254 18.9742 2.42417 19.3258C2.77581 19.6775 3.25272 19.875 3.75 19.875H20.25C20.7473 19.875 21.2242 19.6775 21.5758 19.3258C21.9275 18.9742 22.125 18.4973 22.125 18V5.25C22.125 4.95163 22.0065 4.66548 21.7955 4.4545C21.5845 4.24353 21.2984 4.125 21 4.125ZM12 11.9738L5.89219 6.375H18.1078L12 11.9738ZM8.69906 12L4.125 16.1925V7.8075L8.69906 12ZM10.3641 13.5262L11.2397 14.3297C11.4472 14.52 11.7185 14.6255 12 14.6255C12.2815 14.6255 12.5528 14.52 12.7603 14.3297L13.6359 13.5262L18.1078 17.625H5.89219L10.3641 13.5262ZM15.3009 12L19.875 7.8075V16.1925L15.3009 12Z"
                fill="black"
                fill-opacity="0.4"
              />
            </svg>
            <input type="text" placeholder="Enter your email address" />
          </div>
          <button className="rounded-[62px] bg-white flex px-4 py-3 gap-2 justify-center items-center font-medium">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  );
};
