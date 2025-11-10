// rrd
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// components
import HomePage from "./pages/home-page";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import ProtectedRoute from "./components/protected-route/ProtectedRoute";
import MainLayout from "./layouts/MainLayout";
import { useGlobalContext } from "./hooks/useGlobalContext";

const App = () => {
  const { authReady } = useGlobalContext();
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);

  return <> {authReady && <RouterProvider router={routes} />} </>;
};

export default App;
