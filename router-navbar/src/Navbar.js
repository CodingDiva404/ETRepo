import React from "react"
import { NavLink } from "react-router-dom"
import './App.css'


function Navbar() {
    return (
        <div className="container">
            <div className="logo">
                <h1>Shraddha</h1>
            </div>

            <div className="list">
                <ul>
                    <li>
                       <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/product">Product</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar