import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="navbar">
      <h2>Context API Demo</h2>
      <button className="toggle-btn" onClick={toggleTheme}>
        Toggle {theme === "light" ? "Dark" : "Light"}
      </button>
    </div>
  );
};

export default Navbar;