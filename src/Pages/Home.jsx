import React from "react";
import useChangeTitle from "../Hooks/useChangeTitle";
import Section from "../Components/Section.jsx";
import Button from "../Components/Button.jsx";
import ImgCard from "../Components/ImgCard.jsx";
import PageHeader from "../Components/PageHeader.jsx";
import { homeData } from "../Data/Data.js";

export default function Home() {
  useChangeTitle("HOME");

  return (
    <>
      <Section
        title={homeData.aboutUs.title}
        desc={homeData.aboutUs.desc}
        className="items-center" // Set default background color or remove if not needed
      />
      <Section
        title={homeData.ourServices.title}
        desc={homeData.ourServices.desc}
        className="items-center bg-gray-100" // Set specific background color
      />
      <PageHeader heading="Home" />
    </>
  );
}
