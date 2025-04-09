import { CollapsibleItem } from "./CollapsibleItem";

export const Features = () => {
  const items = [
    {
      number: "01",
      title: "Personalized Property Insights",
      description:
        "Get tailored recommendations based on your unique lifestyle and preferences. Our expertise ensures you discover properties that truly feel like home.",
    },
    {
      number: "02",
      title: "Personalized Property Insights",
      description:
        "Get tailored recommendations based on your unique lifestyle and preferences. Our expertise ensures you discover properties that truly feel like home.",
    },
    {
      number: "03",
      title: "Personalized Property Insights",
      description:
        "Get tailored recommendations based on your unique lifestyle and preferences. Our expertise ensures you discover properties that truly feel like home.",
    },
  ];

  return (
    <div className="rounded-3xl bg-white max-w-[580px] absolute bottom-8 left-8 pl-8">
      {items.map((item, index) => (
        <CollapsibleItem
          key={index}
          number={item.number}
          title={item.title}
          description={item.description}
          isOpenByDefault={index === 0}
        />
      ))}
    </div>
  );
};
