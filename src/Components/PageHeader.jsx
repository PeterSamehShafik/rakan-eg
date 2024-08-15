import React from "react";
import { useLocation } from "react-router-dom";

function PageHeader({ heading }) {
  const route = useLocation().pathname;
  const routes = route.substring(1, route.length).split("/");

  const formatRoute = (routes) => {
    const capitalizeFirstLetter = (str) =>
      str.charAt(0).toUpperCase() + str.slice(1);

    return routes
      .map((route) => {
        const wordsArray = route.replace("-", " ").split(" ");
        return wordsArray.map((word) => capitalizeFirstLetter(word)).join(" ");
      })
      .join(" > ");
  };

  console.log(formatRoute(routes));

  return (
    <header>
      <div className="container">
        <div className="heading">{heading}</div>
        <div className="route"></div>
      </div>
    </header>
  );
}

export default PageHeader;
