import React from "react";
import { Route, Routes } from "react-router-dom";
import PublicPagesNotLogged from "../components/publicPageNotLogged";
import SignIn from "../pages/SignIn";

const PublicRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<PublicPagesNotLogged />}>
      <Route index element={<SignIn />} />
    </Route>
  </Routes>
);
export default PublicRoutes;
