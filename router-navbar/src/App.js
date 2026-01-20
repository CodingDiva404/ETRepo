import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from "./Components/Home.js";
import Product from "./Components/Product.js";
import Contact from "./Components/Contact.js";
import Car from "./Components/Car.js"
import Bike from "./Components/Bike.js"

function App(){
  return(
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />}>
            <Route path='car' element={<Car/>} />
            <Route path='bike' element={<Bike/>}/>
        </Route>
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}


export default App;
