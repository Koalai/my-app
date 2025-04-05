export const Image = ({
  title,
  smallImage,
}: {
  title: string;
  smallImage: string;
}) => {
  return (
    <div className="p-0.5">
      <div className="overflow-hidden relative m-0 group">
        <a title={title}>
          <div className="absolute text-center mx-auto text-white bg-gradient-to-r from-blue-500/80 to-blue-400/80 pt-[30%] h-full w-full opacity-0 transition-all duration-500 group-hover:opacity-100">
            <h4 className="text-lg text-white translate-y-full transition-all duration-300 uppercase font-medium tracking-wide group-hover:opacity-100 group-hover:translate-y-0">
              {title}
            </h4>
          </div>
          <img src={smallImage} className="w-full h-auto" alt={title} />
        </a>
      </div>
    </div>
  );
};
