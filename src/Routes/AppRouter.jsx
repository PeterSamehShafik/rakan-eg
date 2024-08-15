import React from "react";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import TopLoader from "../Components/TopLoader";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";

const AppRouter = () => (
  <BrowserRouter>
    <Navbar />
    <TopLoader>
      <Route path="" element={<Home />} />
      <Route path="404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </TopLoader>
  </BrowserRouter>
);

export default AppRouter;
