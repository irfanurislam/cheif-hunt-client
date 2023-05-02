import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user,logOut } = useContext(AuthContext);
  const handleLogut = () =>{
    logOut()
    .then(() =>{
      console.log('logout successfull')
    })
    .catch(error =>{
      console.log(error)
    })
  }

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
              <Link className="mb-3" to="/statistics">
                Statistics
              </Link>
              <Link className="mb-3" to="/applyjob">
                Applied Jobs
              </Link>
              <Link className="mb-3" to="/Blog">
                Blog
              </Link>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case font-bold text-base md:text-2xl text-[#1A1919]">
            KnowledgeCheif
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
              to="/statistics"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Statistics
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
              
              <div className="w-14 rounded-full ">
                <img src={user?.photoURL} data-tooltip-target="tooltip-light" />
                <div
                  id="tooltip-dark"
                  role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 tooltip"
                >
                  Tooltip 
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
              <button onClick={handleLogut} className="btn btn-warning">Logout</button>
            </>
          ) : (
            <Link to="/" className="btn btn_all  text-xs md:text-base">
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
