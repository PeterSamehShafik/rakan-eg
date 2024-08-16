import PageHeader from "../Components/PageHeader";
import Section from "../Components/Section";
import Card from "../Components/Card";
import { AiOutlineLike } from "react-icons/ai";
import { service1Data } from "../Data/Data"; // Adjust the path if necessary
import useChangeTitle from "../Hooks/useChangeTitle.jsx";
export default function Service1() {
  useChangeTitle("Service1");
  return (
    <>
      <PageHeader heading={service1Data.pageHeader} />
      <Section title={service1Data.pageHeader}>
        <h3 className="font-semibold tracking-wide my-3">
          {service1Data.section1.title}
        </h3>
        <p className="text-gray-500 leading-relaxed tracking-wide">
          {service1Data.section1.description}
        </p>

        <Section
          title={service1Data.section2.title}
          className="text-red-800 text-xl items-center text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-2 max-sm:gap-0 mt-3">
            {service1Data.section2.cards.map((card) => (
              <Card
                key={card.index}
                index={card.index}
                icon={card.icon}
                title={card.title}
                desc={card.desc}
              />
            ))}
          </div>
        </Section>
      </Section>
    </>
  );
}
