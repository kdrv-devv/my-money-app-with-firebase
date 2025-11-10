// react imports
import { useContext } from "react";
import { GlobalContext } from "../context/globalContext";
// global context

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("useGlobalContext() must be in the  GlobalContextProvider");
  }
  return context;
};
