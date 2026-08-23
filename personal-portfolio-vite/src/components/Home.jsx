import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {
        const [currentProject, setCurrentProject] = useState(0);

        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentProject((previous) =>
                    (previous + 1) % projects.length
                );
            }, 5000);

            return () => clearInterval(interval);
        }, []);

        const backgroundImage = projects[currentProject]?.image;

    return (
        <section className="home" id="home" style={{ backgroundImage: `url(${backgroundImage})` }}>
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
                    <Link to="/about" className="home-button">
                        <button>About</button>
                    </Link>

                    <Link to="/projects" className="home-button">
                        <button>Projects</button>
                    </Link>
                    
                    <Link to="/skills" className="home-button">
                        <button>Skills</button>
                    </Link>

                    <Link to="/experience" className="home-button">
                        Experience
                    </Link>

                    <Link to="/contact" className="home-button">
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