import React from "react";
import PageHeader from "../Components/PageHeader.jsx";
import Section from "../Components/Section.jsx";
import useChangeTitle from "../Hooks/useChangeTitle.jsx";
import { mediaData } from "../Data/Data.js";

export default function MediaCenter() {
  useChangeTitle("Media Center");

  return (
    <>
      <PageHeader heading="Media Center" />

      {/* Intro */}
      <Section
        title={mediaData.intro.title}
        desc={mediaData.intro.desc}
        className="items-center max-w-5xl mx-auto text-center"
      />

      {/* Masonry Photo Gallery */}
      <Section
        title="Gallery"
        desc="Check out our completed projects, site progress, and events in photos."
        className="items-center max-w-6xl mx-auto"
      >
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
          {mediaData.photos.map((photo, index) => (
            <div
              key={index}
              className="mb-4 overflow-hidden rounded-lg group relative cursor-pointer"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full mb-4 transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <p className="text-white text-center font-semibold px-2">
                  {photo.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
