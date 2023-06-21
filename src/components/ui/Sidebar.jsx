import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="md:w-2/5 xl:w-1/5 bg-gray-600">
      <div className="p-6">
        <p className="text-white text-2xl tracking-tight text-center">
          Restaurant App
        </p>
        <p className="mt-3 text-gray-400">
          Administra tu restaurant en las siguientes opciones
        </p>
        <nav className="mt-10">
          <NavLink
            exact="true"
            className="nav-link p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-600"
            to="/"
          >
            Ordenes
          </NavLink>
          <NavLink
            exact="true"
            className="nav-link p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-600"
            to="/menu"
          >
            Menu
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
