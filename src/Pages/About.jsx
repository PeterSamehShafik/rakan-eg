import { useEffect, useState } from "react";
import Card from "../Components/Card";
import Section from "../Components/Section";
import PageHeader from "../Components/PageHeader";
import { aboutUsData } from "../Data/Data"; // Adjust the path if necessary
// Import images directly from the src/assets folder
import avatar from "../Assets/avatar.jpg"; // Adjust the path if necessary

function About() {
  const [data, setData] = useState(null);

  // Create a mapping for dynamic imports
  const images = {
    "avatar.jpg": avatar,
    // Add more mappings if needed
  };

  useEffect(() => {
    // Assuming data is directly available for simplicity
    setData(aboutUsData);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <PageHeader heading="About Us" />

      <Section
        title={data.section1.title}
        desc={data.section1.desc}
        className="items-center max-w-6xl mx-auto"
      />

      <div className="h-[0.25px] max-w-6xl mx-auto bg-[#dbdbdb] my-3"></div>

      <Section
        title={data.section2.title}
        desc={data.section2.desc}
        className="items-center max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 h-full space-x-4 w-full mt-4">
          {data.section2.cards.map((card, index) => (
            <Card key={index} icon={card.icon} title={card.title} />
          ))}
        </div>
      </Section>

      <div className="h-[0.25px] max-w-6xl mx-auto bg-[#dbdbdb] "></div>

      <Section title={data.section3.title} className="items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-x-4 mt-3">
          {data.section3.members.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105"
            >
              {/* Image Section */}
              <img
                src={images[member.avatar]}
                alt="Profile"
                className="w-full object-cover px-4"
              />

              {/* Details Section */}
              <div className="p-6">
                <h2 className="text-xl text-center group-hover:text-red-600 transition-colors font-bold text-gray-800">
                  {member.name}
                </h2>
                <p className="text-sm text-center text-gray-600">
                  {member.title}
                </p>
                <div className="mt-4 space-y-2">
                  <p className="text-gray-700">
                    <span className="font-semibold">Mob:</span> {member.mob}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">E-Mail:</span>{" "}
                    {member.email}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Experience:</span>{" "}
                    {member.experience}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

export default About;

