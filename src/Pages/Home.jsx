import React from "react";
import useChangeTitle from "../Hooks/useChangeTitle";
import Section from "../Components/Section.jsx";

export default function Home() {
  useChangeTitle("HOME");

  return (
    <>
      <div>Home</div>

      {/* <Section title="text" desc="" className="">
        <h1 className="text-slate-300">hi</h1>
      </Section> */}
    </>
  );
}
