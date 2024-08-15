import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function PageHeader({ heading }) {
  const location = useLocation().pathname;
  const [routes, setRoutes] = useState(null);

  const formatRoute = (routes) => {
    const capitalizeFirstLetter = (str) =>
      str.charAt(0).toUpperCase() + str.slice(1);

    setRoutes(
      routes
        .map((route) => {
          const wordsArray = route.replace(/-/g, " ").split(" ");
          return wordsArray
            .map((word) => capitalizeFirstLetter(word))
            .join(" ");
        })
        .join(" > ")
    );
  };

  useEffect(() => {
    formatRoute(location.split("/").slice(1));
  }, []);

  return (
    <header className="py-10 !bg-gray-100">
      <div className="container mx-auto flex justify-between items-center">
        <h3 className="text-lg font-semibold opacity-70 text-gray-600 tracking-wider">
          {heading.toUpperCase()}
        </h3>
        <h5 className="opacity-50 text-sm">{"Rakan-eg > " + routes}</h5>
      </div>
    </header>
  );
}

export default PageHeader;
