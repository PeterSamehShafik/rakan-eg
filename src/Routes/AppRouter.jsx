import React from "react";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import TopLoader from "../Components/TopLoader";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import About from "../Pages/About.jsx";
import Footer from "../Components/Footer/Footer.jsx";

const AppRouter = () => (
  <BrowserRouter>
    <Navbar />
    <TopLoader>
      <Route path="" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </TopLoader>
    <Footer />
  </BrowserRouter>
);

export default AppRouter;
