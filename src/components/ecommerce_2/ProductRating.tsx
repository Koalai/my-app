export const ProductRating = ({ rating }: { rating: number }) => {
  const maxRating = 5;
  const ratingPercentage = (rating / maxRating) * 100;

  return (
    <div className="flex items-center gap-2">
      <div className="relative flex">
        <div className="flex text-gray-300 text-2xl">
          {[...Array(maxRating)].map((_, index) => (
            <span key={index}>★</span>
          ))}
        </div>
        <div
          className="absolute top-0 left-0 flex overflow-hidden text-yellow-400 text-2xl"
          style={{ width: `${ratingPercentage}%` }}
        >
          {[...Array(maxRating)].map((_, index) => (
            <span key={index}>★</span>
          ))}
        </div>
      </div>
      <span className="text-gray-600 text-sm">
        {rating.toFixed(1)} / {maxRating}
      </span>
    </div>
  );
};
