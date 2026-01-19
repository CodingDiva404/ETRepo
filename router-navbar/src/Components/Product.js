import { Link, Outlet } from "react-router-dom";

function Product() {
  return (
    <div>
      <h1>Product Page</h1>

      <Link to="car">Car</Link> | 
      <Link to="bike">Bike</Link>

      <hr />

      <Outlet />
    </div>
  );
}

export default Product;
