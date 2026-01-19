import React from "react"
import {Links} from "react-router-dom"
import "../App.css"

function Navbar(){
    return (
    <div className="navBar">
        <div className="logo">
            <h1>Shraddha</h1>                
        </div>

        <div className="list">
            <ul>
                <li>
                    <Links className="link" to="/">Home</Links>
                </li>
                <li>
                    <Links className="link" to="/products">Products</Links>
                </li>
                <li>
                    <Links className="link" to="/contact">Contact</Links>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default Navbar;