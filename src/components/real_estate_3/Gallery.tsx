import { useEffect, useState } from "react";
import { Carousel } from "./Carousel";

export const Gallery = () => {
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [tradespeople, setTradespeople] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);

  const targetExperience = 10;
  const targetProjects = 250;
  const targetTradespeople = 30;
  const targetSatisfaction = 100;

  const animateCount = (
    setValue: React.Dispatch<React.SetStateAction<number>>,
    target: number,
    duration = 2000
  ) => {
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / target));

    const timer = setInterval(() => {
      start += 1;
      setValue(start);
      if (start >= target) {
        clearInterval(timer);
        setValue(target);
      }
    }, stepTime);
  };

  useEffect(() => {
    animateCount(setExperience, targetExperience);
    animateCount(setProjects, targetProjects);
    animateCount(setTradespeople, targetTradespeople);
    animateCount(setSatisfaction, targetSatisfaction);
  }, []);
  return (
    <div>
      <Carousel />
      <div className="flex gap-[120px] px-[80px] pt-[100px] pb-[150px] justify-between">
        <div>
          <h1 className="text-7xl font-light">{experience}</h1>
          <p className="text-lg font-semibold leading-snug mt-5">
            Years experience{" "}
            <span className="block font-normal">
              Years of experience in home improvement
            </span>
          </p>
        </div>
        <div>
          <h1 className="text-7xl font-light">{projects}</h1>
          <p className="text-lg font-semibold leading-snug mt-5">
            Projects completed{" "}
            <span className="block font-normal">
              Over 250 successful projects delivered with quality and care
            </span>
          </p>
        </div>
        <div>
          <h1 className="text-7xl font-light">{tradespeople}</h1>
          <p className="text-lg font-semibold leading-snug mt-5">
            Skilled Tradespeople{" "}
            <span className="block font-normal">
              Our team of 30 experts ensures top-quality results
            </span>
          </p>
        </div>
        <div>
          <h1 className="text-7xl font-light">{satisfaction}%</h1>
          <p className="text-lg font-semibold leading-snug mt-5">
            Client satisfaction{" "}
            <span className="block font-normal">
              All of our clients are satisfied with our work and service
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
