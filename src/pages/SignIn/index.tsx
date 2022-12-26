import React, { useContext } from "react";

import AuthContext from "../../contexts/auth";

const SignIn: React.FC = () => {
  const { signIn } = useContext(AuthContext);

  // console.log(signed)
  async function handleSignIn() {
    await signIn();
  }

  return (
    <div>
      <button type="button" onClick={handleSignIn}>
        Sign In
      </button>
    </div>
  );
};

export default SignIn;
