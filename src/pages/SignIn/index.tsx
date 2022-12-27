import React, { useContext } from "react";

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
    <div>
      <Header links={links} />
      <button type="button" onClick={handleSignIn}>
        Sign In
      </button>
    </div>
  );
};

export default SignIn;
