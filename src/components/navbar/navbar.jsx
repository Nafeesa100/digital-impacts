import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
    return (
        <header className="navbar">
            <div className="nav-container">


                <div className="nav-logo">
                    <img src="/logo.png" alt="Logo" />
                </div>


                <nav className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/portfolio">Portfolio</Link>
                </nav>

                <div className="nav-btn">
                    <Link to="/contact">Contact Us</Link>
                </div>

            </div>


            <div className="nav-bottom-bar"></div>
        </header>
    );
}
