import React from "react";
import { Route, Routes } from "react-router-dom";

import PublicPage from "../components/PublicPage";
import Home from "../pages/Home";

const PrivateRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<PublicPage />}>
      <Route index element={<Home />} />
    </Route>
  </Routes>
);
export default PrivateRoutes;
