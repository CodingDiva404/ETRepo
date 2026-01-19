import { NavLink } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <div className="navBar">
      <div className="logo">
        <h1>Shraddha</h1>
      </div>

      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
