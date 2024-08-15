import React from "react";
import Button from "./Button";
import { FaSearchPlus } from "react-icons/fa";

function ImgCard({ src, content }) {
  return (
    <div className="relative group w-96 bg-red-600 h-64 overflow-hidden shadow-lg max-[390px]:w-80 max-[390px]:mx-auto">
      {/* Card Image */}
      <img src={src} alt="Card" className="w-full h-full object-cover" />

      {/* Div that slides up on hover */}
      <div
        className="absolute inset-0 bg-black bg-opacity-40 
                      translate-y-full group-hover:translate-y-0 
                      transition-transform duration-300 ease-in-out"
      >
        {/* Button that moves to the middle on hover */}
      </div>
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:translate-y-0 
                            opacity-0 group-hover:opacity-100 
                            transition-all duration-300 ease-in-out flex flex-col items-center align-middle"
      >
        <Button
          className="transform !p-4 w-12 h-12"
          content=<FaSearchPlus className="text-lg" />
        />
        <h3 className="text-white text-md font-medium tracking-wide mt-3">
          {content}
        </h3>
      </div>
    </div>
  );
}

export default ImgCard;
