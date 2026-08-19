import { Container } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import gameBackground from "../assets/Crown_Of_Exodus.png";
import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {
    return (
        <section className="home" id="home" style={{ backgroundImage: `url(${gameBackground})` }}>
            <div className="home-content">

                <p className="home-eyebrow">
                    SOFTWARE ENGINEER
                </p>

                <h4>
                    Hi, I'm Ishmael Kwayisi.
                </h4>

                <p className="home-description">
                    I build software and interactive systems with a
                    focus on solving interesting problems.
                </p>

                <div className="home-actions">
                    <Link to="/about">
                        <button>About</button>
                    </Link>

                    <a href ="#projects" className="home-button">
                        Projects
                    </a>
                    
                    <Link to="/skills">
                        <button>Skills</button>
                    </Link>

                    <a href ="#experience" className="home-button">
                        Experience
                    </a>

                    <Link to="/contact">
                        <button>Contact</button>
                    </Link>

                    {/* <a
                        href="https://github.com/IshKwayisi1232004"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="home-link"
                    >
                        GitHub
                    </a> */}
                </div>

            </div>
        </section>
    );
};