import React, { useContext } from "react";

import { AuthForm } from "../../components/Forms/Auth";
import Header from "../../components/Header";
import { HeaderProps } from "../../components/Header/types";
import AuthContext from "../../contexts/auth";

const SignIn: React.FC = () => {
  const { signIn } = useContext(AuthContext);

  const { links }: HeaderProps = {
    links: [
      { text: "Entrar", path: "/", highlight: true },
      { text: "Cadastre-se", path: "/" },
    ],
  };

  async function handleSignIn() {
    await signIn();
  }

  return (
    <>
      <Header links={links} />
      <AuthForm isRegister />
      <button type="button" onClick={handleSignIn}>
        Sign In
      </button>
    </>
  );
};

export default SignIn;
