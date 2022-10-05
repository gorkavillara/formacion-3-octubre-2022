import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContextProvider";

const NavBar = () => {
  const { vRoute, setVRoute } = useContext(AppContext);
  return (
    <ul className="nav-bar">
      <li>
        <button
          className={vRoute === "home" ? "active" : ""}
          onClick={() => setVRoute("home")}
        >
          Home
        </button>
      </li>
      <li>
        <button
          className={`${vRoute === "speedTest" ? "active" : ""}`}
          onClick={() => setVRoute("speedTest")}
        >
          Speed Test
        </button>
      </li>
      {/* <li>
        <button
          className={`${vRoute === "dashboard" ? "active" : ""}`}
          onClick={() => setVRoute("dashboard")}
        >
          Dashboard
        </button>
      </li> */}
      <li>
        <button
          className={`${vRoute === "todolist" ? "active" : ""}`}
          onClick={() => setVRoute("todolist")}
        >
          Todos
        </button>
      </li>
    </ul>
  );
};

export default NavBar;
