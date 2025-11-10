// firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
// custom hooks
import { useGlobalContext } from "./useGlobalContext";
// sonner
import { toast } from "sonner";

export const useLogin = () => {
  const { dispatch } = useGlobalContext();

  const logIn = (loginUser) => {
    signInWithEmailAndPassword(auth, loginUser.email, loginUser.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        toast.success("Welcome back !");
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return { logIn };
};
