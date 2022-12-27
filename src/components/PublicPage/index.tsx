import React, { ReactNode } from "react";
import { Outlet } from "react-router";

import * as S from "./styles";

interface IAppProps {
  children?: ReactNode;
}
const PublicPagesLogged: React.FC<IAppProps> = () => {
  return (
    <S.Container>
      <Outlet />
    </S.Container>
  );
};

export default PublicPagesLogged;
