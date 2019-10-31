import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default () => {
  let { isLight, light, dark, toggle } = useContext(ThemeContext);
  let mode = isLight ? light : dark;

  let style = {
    color: mode.txt,
    backgroundColor: mode.elBack
  };
  return (
    <nav className={`app-nav mode-${isLight ? "light" : "dark"}`} style={style}>
      <div className="container">
        <h1> Where in the world? </h1>

        <button
          style={{ color: mode.txt }}
          className={`nav-toggle hover-${isLight ? "light" : "dark"}`}
          onClick={toggle}
        >
          <i className="fa fa-moon"></i>
          Dark Mode
        </button>
      </div>
    </nav>
  );
};
