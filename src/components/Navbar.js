import React from "react";
import logo from "../images/travel-logo.png";

export default function Navbar() {
    return (
        <nav>
            <img src={logo} className="nav--logo"/>
            <p className="nav--title">&nbsp;my travel journal.</p>
        </nav>
    )
}