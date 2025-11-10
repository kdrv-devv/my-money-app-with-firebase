import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { toast } from "sonner";
import { useGlobalContext } from "./useGlobalContext";

export const useSignOut = () => {
    const { dispatch } = useGlobalContext()
    const signOutUser = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        toast.success("Sign-out successful.");
        dispatch({type:"LOGOUT"})
      })
      .catch((error) => {
        // An error happened.
        toast.error(error.message);
      });
  };
  return { signOutUser };
};
