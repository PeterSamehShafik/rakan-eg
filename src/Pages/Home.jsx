import React from "react";
import useChangeTitle from "../Hooks/useChangeTitle";
import Section from "../Components/Section.jsx";

export default function Home() {
  useChangeTitle("HOME");

  return (
    <>
      <div>Home</div>

      <Section title='ABOUT US' desc='TESTING'>
        <h1>hi</h1>
      </Section>
    </>
  );
}
