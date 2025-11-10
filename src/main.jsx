import { createRoot } from "react-dom/client";
import "./index.css";
import { GlobalContextProvider } from "./context/globalContext";
import { Toaster } from "sonner";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <GlobalContextProvider>
    <App />
    <Toaster position="top-right" />
  </GlobalContextProvider>
);
