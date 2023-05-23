import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ user }) => {
  const activeClass = `${user.admin ? "bg-rose-500 w-36 " : 'bg-rose-500 w-2/6'} text-xl rounded-full h-5/6 font-bold flex justify-center items-center text-zinc-200  `;
  const inActiveClass = `${user.admin ? "bg-zinc-300 w-36": 'bg-white w-2/6'} text-xl rounded-full h-5/6 flex font-bold justify-center items-center hover:bg-red-300 hover:text-white duration-200 text-rose-500 `;

  const links = user.admin ? (
    <>
      <NavLink
        className={({isActive}) => (isActive ? activeClass : inActiveClass)+ 'firstSelected flex justify-center items-center'}
        to="/"
      >
        {user.name}
      </NavLink>
      <NavLink
        className={({isActive}) => (isActive ? activeClass : inActiveClass)}
        to="/tasks"
      >
        Tasks
      </NavLink>
      <NavLink
        className={({isActive}) => (isActive ? activeClass : inActiveClass)}
        to="/requests"
      >
        Requests
      </NavLink>
      <NavLink
        className={({isActive}) => (isActive ? activeClass : inActiveClass)}
        to="/employees"
      >
        Employees
      </NavLink>
      <NavLink
        className={({isActive}) => (isActive ? activeClass : inActiveClass)}
        to="/Groups"
      >
        Groups
      </NavLink>
    </>
  ) : (
    <>
      <NavLink
        className={({isActive}) => (isActive ? activeClass : inActiveClass)}
        to="/"
      >
        {user.name}
      </NavLink>
      <NavLink
        className={({isActive}) => (isActive ? activeClass : inActiveClass)}
        to="/tasks"
      >
        Tasks
      </NavLink>
    </>
  );
  return (
    <nav className="w-full bg-red-950 h-14 flex items-center justify-evenly absolute top-0">
      {links}
    </nav>
  );
};

export default Navbar;
