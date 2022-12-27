import styled from "styled-components";

import { LinkStyleProps } from "./types";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  padding: 1.5em 0.5em;
  gap: 1.5em;
`;
export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
`;
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
`;
export const Links = styled.ul`
  display: flex;
  gap: 1em;
`;
export const Text = styled.p`
  font-size: 18px;
  text-decoration: ${(props: LinkStyleProps) =>
    props.underline ? "underline" : ""};
  a {
    color: ${(props) =>
      props.highlight
        ? props.theme.colors.text.highlight
        : props.theme.colors.text.primary};
    text-decoration: none;
  }
`;
export const TextLogo = styled.h1`
  font-size: 3.5em;
  font-weight: 100;
  color: ${(props) => props.theme.colors.text.primary};
`;
export const Welcome = styled.div`
  color: ${(props) => props.theme.colors.text.highlight};
`;
