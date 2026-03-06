import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Content = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="content">
      <div className="card">
        <h2>Theme: {theme}</h2>
        <p>
          This component reads theme directly from Context API without props.
        </p>
      </div>
    </div>
  );
};

export default Content;