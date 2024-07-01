import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/fireBaseConfig";
import { useState } from "react";

export const useRegister = () => {
  const [isPending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const registerWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      setPending(true);
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
      // You can perform additional actions here (e.g., update user profile, save user data, etc.)
    } catch (error) {
      const errorMessage = error.message;
      console.error("Error during Google sign-in:", errorMessage);
      setError(errorMessage);
    } finally {
      setPending(false);
    }
  };

  return { registerWithGoogle, isPending, error };
};
