import { service2Data } from "../Data/Data";
import PageHeader from "../Components/PageHeader";
import Section from "../Components/Section";

function Service2() {
  // Function to require image dynamically
  const getImage = (imageName) => {
    try {
      return require(`../Assets/${imageName}`);
    } catch (error) {
      console.error("Image not found:", imageName);
      return null; // Return a placeholder or null if image not found
    }
  };

  return (
    <>
      <PageHeader heading={service2Data.pageHeader} />
      <Section title={service2Data.section.title}>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-5">
          {service2Data.section.items.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105"
            >
              {/* Image Section */}
              <img
                src={getImage(item.image)} // Use the dynamic image function
                alt={item.alt}
                className="w-full object-cover px-4"
              />

              {/* Details Section */}
              <div className="p-6">
                <h2 className="text-xl text-center group-hover:text-red-600 transition-colors font-bold text-gray-800 my-2">
                  {item.title}
                </h2>
                <p className="text-sm text-center text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

export default Service2;
