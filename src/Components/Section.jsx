import React from "react";

export default function Section({ children, title, desc, className }) {
  return (
    <>
      <section className={`flex flex-col py-12 ${className}`}>
        <h1 className="tracking-wide text-[28px] font-semibold text-[#333]">
          {title.toUpperCase()}
        </h1>
        <div className="h-[2.5px] w-14 bg-[#dbdbdb] my-3"></div>
        <p className="text-gray-500 text-lg max-md:px-4 max-w-3xl leading-relaxed">
          {desc}
        </p>
        {children}
      </section>
    </>
  );
}
