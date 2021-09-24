import React from 'react';
import { BrowserRouter, Link, NavLink } from 'react-router-dom';


const NavBar = () => {

    return (
        <nav>
        
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navebar-nav">
                <NavLink className="nav-item nav-link" to="/movies">
                    Movies
                </NavLink>
                <NavLink className="nav-item nav-link" to="/customers">
                    Customersmmmmm
                </NavLink>
                <NavLink className="nav-item nav-link" to="/rentals">
                    Rentals
                </NavLink>
                <NavLink className="nav-item nav-link" to="/login">
                    Login
                </NavLink>
            </div>
        </div>
        </nav>

    ); 
}

export default NavBar;
