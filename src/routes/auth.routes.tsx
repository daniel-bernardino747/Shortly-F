import React from "react";
import { Route, Routes } from "react-router-dom";

import PublicPage from "../components/PublicPage";
import SignIn from "../pages/SignIn";

const PublicRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<PublicPage />}>
      <Route index element={<SignIn />} />
    </Route>
  </Routes>
);
export default PublicRoutes;
