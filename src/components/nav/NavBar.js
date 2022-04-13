import React from "react"
import { BrowserRouter, Link, Router, useLocation, useNavigate } from "react-router-dom"
import "./NavBar.css"


export const NavBar = ({ clearUser, isAuthenticated }) => {
     const navigate = useNavigate()
const location = useLocation();
     const handleLogout = () => {
         clearUser();
         navigate('/');
     }


console.log(location)

    return (
       
        
        <ul className="navbar">
            <li className='navbar__item'>
                <Link className={`navbar__link ${location.pathname === '/' ? 'active':''}`} to="/">NSS Kennels</Link>
            </li>
            <li className="navbar__item">
                <Link className={`navbar__link ${location.pathname === '/locations' ? 'active':''}`} to="/locations">Locations</Link>
            </li>
            {isAuthenticated &&
            <li className="navbar__item">
                <Link className={`navbar__link ${location.pathname === '/animals' ? 'active':''}`} to="/animals">Animals</Link>
            </li>
            
            }
            {isAuthenticated &&
            
            <li className="navbar__item">
                <Link className={`navbar__link ${location.pathname === '/customers' ? 'active':''}`} to="/customers">Customers</Link>
            </li>
            }
            {isAuthenticated &&
            
            <li className="navbar__item">
                <Link className={`navbar__link ${location.pathname === '/employees' ? 'active':''}`} to="/employees">Employees</Link>
            </li>
            }
            <li className="navbar__item">
                <Link className={`navbar__link ${location.pathname === '/MadLib' ? 'active':''}`} to="/MadLib">MadLib</Link>
            </li>
            {isAuthenticated
                ? <li className="navbar__item">
                    <span className="navbar__link logout" onClick={handleLogout}> Logout </span>
                </li>
                : <li className="navbar__item">
                    <Link className={`navbar__link ${location.pathname === '/login' ? 'active':''}`} to="/login">Login</Link>
                </li>}
   </ul>
    )
}