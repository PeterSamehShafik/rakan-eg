import React, { useState, useEffect } from "react";
import Section from "../Components/Section.jsx";
import PageHeader from "../Components/PageHeader.jsx";
import Card from "../Components/Card.jsx";
import Button from "../Components/Button.jsx";
import useChangeTitle from "../Hooks/useChangeTitle.jsx";
import { projectData } from "../Data/Data.js"; // assume you have projectData

export default function Project() {
  useChangeTitle("Projects");

  const [data, setData] = useState(null);

  // Map images dynamically if needed
  const images = {};
  projectData?.projects?.forEach((proj) => {
    if (proj.image) {
      try {
        images[proj.image] = require(`../Assets/${proj.image}`);
      } catch (error) {
        console.warn("Image not found:", proj.image);
      }
    }
  });

  useEffect(() => {
    setData(projectData);
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <>
      <PageHeader heading="Projects" />

      {/* Introduction Section */}
      <Section
        title={data.intro.title}
        desc={data.intro.desc}
        className="items-center"
      />

      <div className="h-[0.25px] max-w-6xl mx-auto bg-[#dbdbdb] my-3"></div>

      {/* Project Cards Section */}
      <Section
        title={data.projectsSection.title}
        desc={data.projectsSection.desc}
        className="items-center max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 mt-5">
          {data.projects.map((proj, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105"
            >
              {/* Project Image */}
              {proj.image && (
                <img
                  src={images[proj.image] || proj.image}
                  alt={proj.title}
                  className="w-full object-cover px-4"
                />
              )}

              {/* Project Details */}
              <div className="p-6">
                <h2 className="text-xl text-center group-hover:text-red-800 transition-colors font-bold text-gray-800 my-2">
                  {proj.title}
                </h2>
                <p className="text-sm text-center text-gray-600 leading-relaxed">
                  {proj.description}
                </p>

                {proj.link && (
                  <div className="text-center mt-4">
                    <Button outline={true}>
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
