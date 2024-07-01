import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/fireBaseConfig";

//react imports
import { useState } from "react";

export const useRegister = () => {
  const [isPending, setPending] = useState(false);

  const registerWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      setIsPending(true);
      await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
      setIsPending(false);
    } catch (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
      setIsPending(false);
    }
  };
};
return { registerWithGoogle, isPending };
