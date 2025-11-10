// firebase
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useGlobalContext } from "./useGlobalContext";
import { toast } from "sonner";

export const useSignUp = () => {
  const { dispatch } = useGlobalContext();
  const signUp = (newUser) => {
    createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        toast.success("Register succesfully !");
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return { signUp };
};
