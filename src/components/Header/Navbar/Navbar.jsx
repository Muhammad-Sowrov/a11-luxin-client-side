import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../firebase/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleOut = () => {
    logOut()
    .then()
    .then()
  }
  // console.log(user);
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 font-bold" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/rooms"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 font-bold" : ""
          }
        >
          Rooms
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myRooms"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 font-bold" : ""
          }
        >
          My Rooms
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="container mx-auto px-5">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="men list-none gap-5 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-500" : ""
            }
          >
            <p className="btn btn-ghost normal-case text-xl font-mono">LuxInn</p>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="men list-none gap-5 menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user?.email? <NavLink
            onClick={handleOut}
            to="/login"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-500 font-bold" : ""
            }
          >
            Log Out
          </NavLink> : <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-500 font-bold" : ""
            }
          >
            Login
          </NavLink>
          }
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
