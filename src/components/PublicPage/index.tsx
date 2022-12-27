import React, { ReactNode } from "react";
import { Outlet } from "react-router";

interface IAppProps {
  children?: ReactNode;
}
const PublicPagesLogged: React.FC<IAppProps> = () => {
  return (
    <>
      <header>Header Logged</header>
      <Outlet />
      <footer>Footer Logged</footer>
    </>
  );
};

export default PublicPagesLogged;
