import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <h2 className="logo">CustomArt Connect</h2>

                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/artists">Artists</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/community">Community</Link></li>
                    <li><Link to="/login">Login / Register</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;