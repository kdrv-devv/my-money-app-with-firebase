// rrd
import { Outlet } from "react-router-dom";
// components
import Header from "../components/header";
import { useGlobalContext } from "../hooks/useGlobalContext";

const MainLayout = () => {

  const { user } = useGlobalContext()

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
