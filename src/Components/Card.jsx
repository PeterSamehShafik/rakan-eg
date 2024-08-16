import React from "react";

function Card({ icon, title, desc }) {
  return (
    <div className="relative group flex flex-col items-center p-2 bg-white rounded-lg tracking-wide text-center">
      {/* Icon */}
      <div className="relative">
        <div className="card-logo relative p-5 border border-[#dbdbdb] rounded-full text-6xl text-red-500 z-10 transition-all duration-500 ease-in-out group-hover:text-white group-hover:border-transparent">
          {icon}
        </div>

        {/* Circular Layer */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="p-14 rounded-full bg-gradient-to-r from-red-300 via-red-400 to-red-500 opacity-0 transform scale-125 transition-all duration-700 ease-in-out group-hover:scale-90 group-hover:bg-red-600 group-hover:opacity-100"></div>
        </div>
      </div>

      {/* Heading */}
      <h3 className="mt-4 text-lg font-semibold text-gray-800 transition-colors duration-500 ease-in-out group-hover:text-red-500">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm text-gray-500 text-justify leading-relaxed">{desc}</p>
    </div>
  );
}

export default Card;
