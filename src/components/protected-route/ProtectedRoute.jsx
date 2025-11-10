import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../../hooks/useGlobalContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useGlobalContext();

  if (user) {
    return <>{children}</>;
  } else {
    return <Navigate to={"/signup"} />;
  }
};

export default ProtectedRoute;
