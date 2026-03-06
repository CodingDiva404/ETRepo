import React, { useContext } from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import { ThemeContext } from "./ThemeContext";
import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <Content />
    </div>
  );
}

export default App;