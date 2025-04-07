import { ProductRating } from "./ProductRating";

export const ProductCard = ({
  img,
  name,
  price,
  rating,
}: {
  img: string;
  name: string;
  price: string;
  rating: number;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <img src={img} alt="" />
      <p className="text-xl font-bold ">{name}</p>
      <ProductRating rating={rating} />
      <p className="text-2xl font-bold">{price}</p>
    </div>
  );
};
