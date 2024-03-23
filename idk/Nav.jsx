import React from "react";
import { Link } from "react-router-dom";



const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
            <div className="logo">
                <h1>React Portfolio!</h1>
            </div>
        </nav>
    );
}

export default Nav;