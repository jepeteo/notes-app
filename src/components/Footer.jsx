import React from "react";
import "../css/Footer.css";
import icon_react from "/src/assets/react.png";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer--copyright">2024 © Theodoros M.</div>
            <div className="footer--made-with">
                Made with React!
                <img src={icon_react} alt="React Logo" />
            </div>
        </footer>
    );
}