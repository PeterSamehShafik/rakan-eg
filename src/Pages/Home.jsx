import React from "react";
import useChangeTitle from "../Hooks/useChangeTitle";
import Section from "../Components/Section.jsx";
import Button from "../Components/Button.jsx";
import ImgCard from "../Components/ImgCard.jsx";
import PageHeader from "../Components/PageHeader.jsx";
import { homeData } from "../Data/Data.js";
import MainCarousel from "../Components/MainCarousel.jsx";
import { Link } from "react-router-dom";
import WorkCarousel from '../Components/WorkCarousel/WorkCarousel.jsx';

export default function Home() {
  useChangeTitle("Home");

  return (
    <>
      <MainCarousel />

      <Section
        title={homeData.aboutUs.title}
        desc={homeData.aboutUs.desc}
        className="items-center" // Set default background color or remove if not needed
      />
      <Section
        title={homeData.ourServices.title}
        desc={homeData.ourServices.desc}
        className="items-center bg-gray-100" // Set specific background color
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          {homeData.servicesCard.map(card => (
            <div key={card.id} className="bg-white text-center rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105">
              <img src={card.imageUrl} alt={card.title} className="w-full h-52 object-cover rounded-t-lg" />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <Link to={card.link}>
                  <Button >
                    Read more
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title={homeData.ourWork.title}
        desc={homeData.ourWork.desc}
        className="items-center"
      >
        <WorkCarousel />
        
        <Button outline={true}>See all work</Button>
      </Section>

    </>
  );
}
