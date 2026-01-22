import { NavLink } from "react-router-dom"


function Navbar(){
    return (
        <div className="container">
            <div className="logo">
                <h1>Shraddha</h1>
            </div>

            <div className="link">
                <li>
                    <NavLink to='/'>Home</NavLink>
             </li>
                <li>
                    <NavLink to='/product'>Product</NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>Contact</NavLink>
                </li>
            </div>
        </div>
    )
}

export default Navbar;