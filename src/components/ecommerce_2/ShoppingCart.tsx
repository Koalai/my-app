import { ProductCart } from "./ProductCart";

const data = [
  { price: "$20", size: "Large", color: "Red", img: "/ecommerce/jean.png" },
  { price: "$20", size: "Large", color: "Red", img: "/ecommerce/tshirt.png" },
  { price: "$20", size: "Large", color: "Red", img: "/ecommerce/shirt.png" },
];
export const ShoppingCart = () => {
  return (
    <div className="px-[100px] pt-6 pb-[170px] border-t-[1px] border-opacity-10 flex flex-col gap-6">
      <div className="flex gap-2 items-center">
        <span>Home</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rotate-180"
        >
          <path
            d="M21.3334 27.6667C21.068 27.6679 20.8132 27.5622 20.6267 27.3733L9.96006 16.7067C9.57012 16.3162 9.57012 15.6838 9.96006 15.2933L20.6267 4.62667C21.0207 4.25952 21.6347 4.27035 22.0156 4.65117C22.3964 5.03199 22.4072 5.64599 22.0401 6.04L12.0801 16L22.0401 25.96C22.43 26.3504 22.43 26.9829 22.0401 27.3733C21.8535 27.5622 21.5988 27.6679 21.3334 27.6667Z"
            fill="black"
          />
        </svg>
        <span>Cart</span>
      </div>
      <p className="uppercase text-[40px] font-extrabold">Your cart</p>
      <div className="flex gap-5">
        <div className="flex gap-5 flex-col border-[1px] border-opacity-10 py-5 px-6 rounded-[20px] w-2/3">
          {data.map((item, index) => (
            <ProductCart
              key={index}
              price={item.price}
              size={item.size}
              color={item.color}
              img={item.img}
            />
          ))}
        </div>
        <div className="border-[1px] border-opacity-10 px-6 py-5 mb-20 flex flex-col gap-4 rounded-[20px] flex-1">
          <p className="font-semibold">Order Summary</p>
          <div>
            <p className="float-left opacity-60">Subtotal</p>
            <p className="float-right font-semibold">$565</p>
          </div>
          <div>
            <p className="float-left opacity-60">Discount (-20%)</p>
            <p className="float-right font-semibold text-red-600">- $113</p>
          </div>
          <div className="border-b-[1px] border-opacity-10 pb-5">
            <p className="float-left opacity-60">Delivery Fee</p>
            <p className="float-right font-semibold">$15</p>
          </div>
          <div>
            <p className="float-left opacity-60">Total</p>
            <p className="float-right font-semibold">$467</p>
          </div>
          <div className="flex gap-3 justify-between">
            <div className="flex gap-2 bg-[#F0F0F0] px-4 py-3 rounded-[62px] flex-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.0766 12.4857L13.7653 3.17444C13.5917 2.9997 13.3851 2.86115 13.1576 2.76685C12.93 2.67254 12.686 2.62435 12.4397 2.62507H3.75001C3.45164 2.62507 3.16549 2.7436 2.95451 2.95457C2.74353 3.16555 2.62501 3.4517 2.62501 3.75007V12.4398C2.62429 12.6861 2.67248 12.9301 2.76679 13.1576C2.86109 13.3852 2.99963 13.5918 3.17438 13.7654L12.4856 23.0766C12.8372 23.4281 13.3141 23.6256 13.8113 23.6256C14.3084 23.6256 14.7853 23.4281 15.1369 23.0766L23.0766 15.1369C23.4281 14.7853 23.6255 14.3085 23.6255 13.8113C23.6255 13.3141 23.4281 12.8373 23.0766 12.4857ZM13.8113 21.2204L4.87501 12.2813V4.87507H12.2813L21.2175 13.8113L13.8113 21.2204ZM9.37501 7.87507C9.37501 8.17174 9.28703 8.46175 9.12221 8.70842C8.95739 8.9551 8.72312 9.14736 8.44903 9.26089C8.17494 9.37442 7.87334 9.40412 7.58237 9.34625C7.2914 9.28837 7.02413 9.14551 6.81435 8.93573C6.60457 8.72595 6.46171 8.45868 6.40383 8.1677C6.34595 7.87673 6.37566 7.57513 6.48919 7.30104C6.60272 7.02695 6.79498 6.79269 7.04165 6.62786C7.28833 6.46304 7.57834 6.37507 7.87501 6.37507C8.27283 6.37507 8.65436 6.5331 8.93567 6.81441C9.21697 7.09571 9.37501 7.47724 9.37501 7.87507Z"
                  fill="black"
                  fill-opacity="0.4"
                />
              </svg>
              <input
                type="text"
                placeholder="Add promo code"
                className="bg-transparent"
              />
            </div>
            <button className="bg-black rounded-[62px] px-4 py-3 text-white w-[100px]">
              Apply
            </button>
          </div>
          <button className="bg-black rounded-[62px] px-4 py-3 text-white ">
            Go to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
