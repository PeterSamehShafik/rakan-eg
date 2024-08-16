import React from "react";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import TopLoader from "../Components/TopLoader";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import About from "../Pages/About";
import Service1 from "../Pages/Service1";
import Service2 from "../Pages/Service2";

const AppRouter = () => (
  <BrowserRouter>
    <Navbar />
    <TopLoader>
      <Route path="" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/service1" element={<Service1 />} />
      <Route path="/service2" element={<Service2 />} />
      <Route path="404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </TopLoader>
  </BrowserRouter>
);

export default AppRouter;
