import React, { ReactNode } from "react";
import { Outlet } from "react-router";

interface IAppProps {
  children?: ReactNode;
}
const PublicPagesNotLogged: React.FC<IAppProps> = () => {
  return (
    <>
      <header>Header Not Logged</header>
      <Outlet />
      <footer>Footer Not Logged</footer>
    </>
  );
};

export default PublicPagesNotLogged;
