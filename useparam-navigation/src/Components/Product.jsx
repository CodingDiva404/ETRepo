import { NavLink, Outlet } from "react-router-dom";

function Product() {
  return (
    <div className="product">
      <h1>Product Page</h1>

      <nav>
        <NavLink to="car">Car</NavLink>
        <NavLink to="bike">Bike</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

export default Product;
