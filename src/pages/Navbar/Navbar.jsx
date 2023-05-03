import React, { useContext, } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);


  const handleLogut = () => {
    logOut()
      .then(() => {
        console.log("logout successfull");
      })
      .catch((error) => {
        console.log(error);
      });
  };



  return (
    <nav className="md:px-12">
      <div className="navbar bg-base-100 py-10">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link className="mb-3" to="/">
                Home
              </Link>
              <Link className="mb-3" to="/applyjob">
                Applied Jobs
              </Link>
              <Link className="mb-3" to="/Blog">
                Blog
              </Link>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case font-bold text-base md:text-2xl text-warning">
            Deliziosa 
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 list_item">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Register
            </NavLink>
            <NavLink
              to="/Blog"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Blog
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              {/* <div className="flex items-center"> */}
              <div className="" title={user.displayName}>
                <img className="w-16 rounded-full" src={user?.photoURL} alt="Profile"
                
                 />
                {/* {user.displayName && <span className="absolute top-full left-1/2 transform -translate-x-1/2 font-medium  text-black  rounded-md opacity-0 transition-opacity duration-200 hover:opacity-100">{user.displayName}</span>} */}
              </div>

              
              {/* </div> */}
              <button onClick={handleLogut} className="btn btn-warning">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="btn btn-warning text-xs md:text-base">
              Login
            </Link>
          )}
          {/* {user && <p>my{user.displayName}</p>} */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
