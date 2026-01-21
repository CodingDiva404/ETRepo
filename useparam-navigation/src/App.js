import './App.css';
import { Route , Routes , useParams } from 'react-router-dom';
import Home from './Components/Home.jsx'
import Product from './Components/Product.jsx'
import Contact from './Components/Contact.jsx'
import Bike from './Components/Bike.jsx'
import Car from './Components/Car.jsx'
import Navbar from './Navbar.jsx'

function App() {
  return (
    <>
    <Navbar/>
        <Routes>
            <Route to='/' element={<Home />}/>
            <Route to='/home' element={<Product/>}>
                <Route to='car'  element={<Car />}/>
                <Route to='bike'  element={<Bike />}/>
            </Route>
            <Route to='/contact' element={<Contact />} />
        </Routes>
    
    </>
  );
}

export default App;
