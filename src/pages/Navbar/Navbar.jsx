import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
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
              <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink>
              <NavLink to="/statistics" className={({ isActive }) => (isActive ? 'active' : 'default')}>Statistics</NavLink>
              <NavLink to="/register" className={({ isActive }) => (isActive ? 'active' : 'default')}>Register</NavLink>
              <NavLink to="/Blog" className={({ isActive }) => (isActive ? 'active' : 'default')}>Blog</NavLink>
            </ul>
          </div>
          <div className="navbar-end">
         
          <Link to="/login">
              <a className="btn btn_all  text-xs md:text-base"> Start Applying</a>
             </Link>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;