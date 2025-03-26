import { TeamCard } from "./TeamCard";

const Team = () => {
  return (
    <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Team
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Our Awesome Team
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <TeamCard
            name="John Powell"
            profession="Service Support"
            imageSrc="/real_estate/person1.png"
          />
          <TeamCard
            name="Thomas Powell"
            profession="Marketing"
            imageSrc="/real_estate/person2.png"
          />
          <TeamCard
            name="Tom Wilson"
            profession="Designer"
            imageSrc="/real_estate/person3.png"
          />
          <TeamCard
            name="Samuel Palmer"
            profession="Marketing"
            imageSrc="/real_estate/person4.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
