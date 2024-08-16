import React from "react";

export default function Section({ children, title, desc, className }) {
  return (
    <>
      <section className={`py-16 max-sm:py-10 max-sm:px-4 ${className}`}>
        <div className={`container flex flex-col mx-auto ${className}`}>
          <h2
            className={`tracking-wide text-3xl font-semibold text-[#333] ${className}`}
          >
            {title.toUpperCase()}
          </h2>
          <div className="h-[2.5px] w-14 bg-[#dbdbdb] my-3"></div>
          <p
            className={`text-gray-500 sm:leading-loose text-md max-md:px-4 max-w-3xl ${className} text-justify`}
          >
            {desc}
          </p>
          {children}
        </div>
      </section>
    </>
  );
}
