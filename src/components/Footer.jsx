import React from "react";
import "../css/Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer--copyright">2024 © Theodoros M.</div>
            <div className="footer--made-with">
                Made with React!
                <img src="src/assets/react.png" alt="React Logo" />
            </div>
        </footer>
    );
}