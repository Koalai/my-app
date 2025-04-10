const logos = [
  { src: "/ecommerce/versace.png", alt: "versace logo" },
  { src: "/ecommerce/prada.png", alt: "versace logo" },
  { src: "/ecommerce/gucci.png", alt: "versace logo" },
  { src: "/ecommerce/CK.png", alt: "versace logo" },
  { src: "/ecommerce/zara.png", alt: "versace logo" },
];

export const Brands = () => {
  return (
    <div className="px-[60px] py-11 flex  bg-black overflow-x-auto justify-center gap-8 w-full">
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo.src}
          alt={logo.alt}
          className="w-1/6 h-[36px] object-contain"
        />
      ))}
    </div>
  );
};
