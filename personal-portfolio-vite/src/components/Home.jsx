import { Container } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import gameBackground from "../assets/Crown_Of_Exodus.png";
import "./Home.css";

export const Banner = () => {
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
                    <a href="#about" className="home-button">
                        About
                    </a>

                    <a href ="#projects" className="home-button">
                        Projects
                    </a>

                    <a href ="#skills" className="home-button">
                        Skills
                    </a>

                    <a href ="#experience" className="home-button">
                        Experience
                    </a>

                    <a href ="#contact" className="home-button">
                        Contact
                    </a>

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