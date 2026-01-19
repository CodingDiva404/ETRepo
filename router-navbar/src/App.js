import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Product from "./Components/Product";
import Contact from "./Components/Contact";
import Car from "./Components/Car";
import Bike from "./Components/Bike";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />}>
          <Route path="car" element={<Car />} />
          <Route path="bike" element={<Bike />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
