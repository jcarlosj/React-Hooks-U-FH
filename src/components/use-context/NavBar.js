import React from 'react';
import { Link } from 'react-router-dom';

/** Functional Component */
export const NavBar = () => {
    return (
        <nav className="container mt-5">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    )
}
