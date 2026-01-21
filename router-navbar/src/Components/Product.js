import { Link, Outlet } from "react-router-dom"
import '../App.css'


function Product(){
    return (
        <div className="productList">
           <h1>Products</h1>

            <nav>
            <Link to="car">Car</Link> 
            <Link to="bike">Bike</Link>
            </nav>
            
           <Outlet/>

        </div>
    )
}

export default Product