import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-name">
                <Link to="/">John McAdams</Link>
            </div>

            <div className="navbar-links">
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
};