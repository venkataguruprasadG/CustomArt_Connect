import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";

function Navbar() {
    const cartItems = [
        "item1",
        "item2",
        "item3"
    ];
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

                    <li className="cart-bag">
                        <Link to="/cart">
                            <HiOutlineShoppingCart />
                            <span className="cart-count">
                                {cartItems.length}
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;