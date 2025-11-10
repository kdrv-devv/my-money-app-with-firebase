import { Link, NavLink } from "react-router-dom";
// context
import { useGlobalContext } from "../../hooks/useGlobalContext";
// custom hooks
import { useSignOut } from "../../hooks/useSignOut";

const Header = () => {
  const { signOutUser } = useSignOut()
  const {user} = useGlobalContext()
  console.log(user , "header user")
  return (
    <header className="bg-[#3a53fb]">
      <div className="mycon py-3 flex items-center justify-between">
        <Link to={"/"}>
          <h1 className="text-2xl font-[700] md:text-3xl text-[#ffaa00]">
            my<span className="text-[#ffffff]">Money</span>
          </h1>
        </Link>

        {user ? (
          <div className="flex items-center gap-3">
            <p className="text-xs sm:text-xl font-[600] text-white">{user.email}</p>
            <div className="avatar h10 sm:h-14 w-10 sm:w-14 rounded-full overflow-hidden object-center">
              <img
                className="w-full h-full"
                src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
                alt=""
              />
            </div>
            <button onClick={signOutUser} className="bg-[#ffaa00] hidden md:flex text-white rounded-md p-2 text-xl">
              Log out
            </button>
          </div>
        ) : (
          <nav className="header-right flex items-center gap-3">
            <NavLink
              to={"/login"}
              className="text-xl sm:text-2xl hover:bg-[#ffaa0015] p-1 rounded-md transition-all duration-300 font-[600] text-[#ffaa00]"
            >
              Login
            </NavLink>
            <NavLink
              to={"/signup"}
              className="text-xl sm:text-2xl hover:bg-[#00000011] p-1 rounded-md transition-all duration-300  font-[600] text-[#ffffff]"
            >
              SignUp
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
