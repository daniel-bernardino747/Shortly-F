import React from "react";

import Header from "../../components/Header";
import { HeaderProps } from "../../components/Header/types";

const Home: React.FC = () => {
  const { welcome, links }: HeaderProps = {
    welcome: "Daniel",
    links: [
      { text: "Entrar", path: "", highlight: true },
      { text: "Cadastre-se", path: "" },
    ],
  };
  return (
    <>
      <Header welcome={welcome} links={links} />
      <div>Home</div>
    </>
  );
};

export default Home;
