import React from "react";
import useChangeTitle from "../Hooks/useChangeTitle";

export default function Home() {
  useChangeTitle("Home");

  return (
    <>
      <div>Home</div>
    </>
  );
}
