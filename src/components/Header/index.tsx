import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/twemoji_shorts.svg";
import * as S from "./styles";
import { HeaderProps } from "./types";

const Header: React.FC<HeaderProps> = ({ welcome, links }) => {
  if (welcome) {
    welcome = `Seja bem-vindo(a), ${welcome}!`;
  }
  return (
    <S.Container>
      <S.NavContainer>
        <S.Welcome>
          <S.Text>{welcome}</S.Text>
        </S.Welcome>
        <S.Links>
          {links.map((i) => (
            <li key={i.text}>
              <S.Text underline={i.underline} highlight={i.highlight}>
                <Link to="">{i.text}</Link>
              </S.Text>
            </li>
          ))}
        </S.Links>
      </S.NavContainer>
      <S.LogoContainer>
        <S.TextLogo>Shortly</S.TextLogo>
        <img src={Logo} alt="" />
      </S.LogoContainer>
    </S.Container>
  );
};

export default Header;
