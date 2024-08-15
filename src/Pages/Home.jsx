import React from "react";
import useChangeTitle from "../Hooks/useChangeTitle";
import Section from "../Components/Section.jsx";
import Button from "../Components/Button.jsx";
import ImgCard from "../Components/ImgCard.jsx";
import PageHeader from "../Components/PageHeader.jsx";

export default function Home() {
  useChangeTitle("HOME");

  return (
    <>
      {/* <div>Home</div> */}

      {/* <Section
        title="Heading One"
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, odit ipsam debitis ab exercitationem unde sit quaerat possimus reiciendis nulla numquam fugiat veritatis blanditiis atque repudiandae, consectetur similique, esse molestiae."
        className="text-center items-center"
      ></Section> */}

      {/* <ImgCard
        src="https://ice-infinity.com/wp-content/uploads/2019/05/windrose.jpg"
        content="Alshamiya Stores."
      /> */}

      <PageHeader
        heading="Career Opportunities"
      />
    </>
  );
}
