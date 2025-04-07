import { useState } from "react";

const QuantityCounter = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="flex items-center gap-4 absolute bg-[#F0F0F0] rounded-[62px] px-5 py-3 bottom-0 right-2 h-11">
      <button
        onClick={handleDecrement}
        className="text-xl font-bold text-gray-600 hover:text-gray-800"
      >
        -
      </button>
      <span className="text-lg font-semibold">{quantity}</span>
      <button
        onClick={handleIncrement}
        className="text-xl font-bold text-gray-600 hover:text-gray-800"
      >
        +
      </button>
    </div>
  );
};

export default QuantityCounter;
