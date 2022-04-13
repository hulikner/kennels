import React from "react"
import { BrowserRouter, Link } from "react-router-dom"
import "./NavBar.css"


export const NavBar = ({ clearUser, isAuthenticated }) => {
    // const navigate = useNavigate()

    // const handleLogout = () => {
    //     clearUser();
    //     navigate('/');
    // }




    return (
        <BrowserRouter>
        
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">NSS Kennels</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/locations">Locations</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/animals">Animals</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/customers">Customers</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/employees">Employees</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/MadLib">MadLib</Link>
            </li>
        </ul>
        </BrowserRouter>
    )
}