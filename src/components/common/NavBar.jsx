import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContextProvider";

import { Link, NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const { vRoute, setVRoute } = useContext(AppContext);
  const navigate = useNavigate();
  const handleAnchor = (e) => {
    e.preventDefault();
    console.log(e.target.pathname);

    return navigate(e.target.pathname);
  };
  return (
    <>
      <span>Desarrollo</span>
      <ul className="nav-bar">
        <li>
          {/* <NavLink
          to="/"
          // style={(data) => ({ color: data.isActive ? "red" : "" })}
          // className={({ isActive }) => (isActive ? "active" : "")}
          end
        >
          Home
        </NavLink> */}
          {/* <br />
        <NavLink
          to="/bienvenido"
          // className={({ isActive }) => (isActive ? "active" : "")}
        >
          Bienvenida
        </NavLink>
        <br /> */}
          {/* <a href="/" onClick={handleAnchor}>Inicio</a> */}
          <NavLink to="/performance">Performance</NavLink>
        </li>
        <li>
          <NavLink to="/speed-test">Speed Test</NavLink>
        </li>
        {/* <li>
        <NavLink to="/todos">Todos</NavLink>
      </li> */}
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/fetch-info">Fetch Info</NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
