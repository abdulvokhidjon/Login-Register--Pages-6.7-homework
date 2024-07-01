import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/fireBaseConfig";

//react imports
import { useState } from "react";

export const useRegister = () => {
  const [isPending, setPending] = useState(false);

  const registerWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };
  return { registerWithGoogle, isPending };
};
