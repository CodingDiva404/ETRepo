import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Mobile from "./pages/Mobile";
import Laptop from "./pages/Laptop";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        {/* Parent Route */}
        <Route path="/products" element={<Products />}>

          {/* Sub Routes */}
          <Route path="mobile" element={<Mobile />} />
          <Route path="laptop" element={<Laptop />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;