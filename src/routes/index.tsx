import React, { useContext } from "react";

import AuthContext from "../contexts/auth";
import PrivateRoutes from "./app.routes";
import PublicRoutes from "./auth.routes";

const Routes: React.FC = () => {
  const { signed } = useContext(AuthContext);
  return signed ? <PrivateRoutes /> : <PublicRoutes />;
};

export default Routes;
