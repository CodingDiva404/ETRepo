import './App.css';
import { Route , Routes } from 'react-router-dom';
import Home from './Components/Home.jsx'
import Product from './Components/Product.jsx'
import Contact from './Components/Contact.jsx'
import Bike from './Components/Bike.jsx'
import Car from './Components/Car.jsx'
import ProductDetails from './Components/Productdetails.jsx'
import Navbar from './Navbar.jsx'

function App() {
  return (
    <>
    <Navbar/>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/product' element={<Product/>}>
                <Route path=':type' element={<ProductDetails />} />
                {/* <Route path='car'  element={<Car />}/>
                <Route path='bike'  element={<Bike />}/> */}
            </Route>
            <Route path='/contact' element={<Contact />} />
        </Routes>
    
    </>
  );
}

export default App;
