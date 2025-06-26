import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold text-gray-800 tracking-wide">
         EstateElite
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-8 text-gray-600 font-medium text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-indigo-600 transition ${
                isActive ? "text-indigo-600 font-semibold" : ""
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/properties"
            className={({ isActive }) =>
              `hover:text-indigo-600 transition ${
                isActive ? "text-indigo-600 font-semibold" : ""
              }`
            }
          >
            Properties
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-indigo-600 transition ${
                isActive ? "text-indigo-600 font-semibold" : ""
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-indigo-600 transition ${
                isActive ? "text-indigo-600 font-semibold" : ""
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
