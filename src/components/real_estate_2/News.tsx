type NewsProps = {
  data: {
    src: string;
    title: string;
    type: string;
    time: string;
  }[];
};

export const News = ({ data }: NewsProps) => {
  return (
    <>
      {data.map((d) => (
        <div className="border-[1px] rounded-md pb-4">
          <img src={d.src} className="rounded-md" />
          <div className="px-3 flex flex-col justify-between gap-2">
            <div className="flex mt-4 justify-center gap-2 ">
              <p className="border-r-[1px] pr-2 text-sm">{d.type}</p>
              <p className="text-sm">{d.time}</p>
            </div>
            <p className="font-bold text-sm">{d.title}</p>
            <button className="font-semibold text-xs">Read More →</button>
          </div>
        </div>
      ))}
    </>
  );
};
