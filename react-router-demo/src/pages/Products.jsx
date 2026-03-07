import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div className="page">

      <h2>Products</h2>

      <div className="sub-navbar">
        <Link to="mobile">Mobile</Link>
        <Link to="laptop">Laptop</Link>
      </div>

      <div className="product-box">
        <Outlet />
      </div>

    </div>
  );
};

export default Products;