import React from "react";
import { Route, Routes } from "react-router-dom";
import PublicPagesLogged from "../components/publicPageLogged";
import Home from "../pages/Home";

const PrivateRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<PublicPagesLogged />}>
      <Route index element={<Home />} />
    </Route>
  </Routes>
);
export default PrivateRoutes;
