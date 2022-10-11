import React from "react";
import './Navbar.scss'
import logo from '../../logo.png'
export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt='City tours logo' />
            <ul className="nav-links">
                <li>
                    <a href="/" className="nav-links">
                        home
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-links">
                        about
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-links">
                        tours
                    </a>
                </li>
            </ul>
        </nav>
    )
}