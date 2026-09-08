import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import "./Home.css";
import { Footer } from "../components/Footer";

export const Home = () => {
        const [currentProject, setCurrentProject] = useState(0);

        const titles = [
            "SOFTWARE ENGINEER",
            "PROBLEM SOLVER",
            "GAMEPLAY PROGRAMMER",
            "FULL-STACK DEVELOPER",
            "CREATIVE DEVELOPER"
        ];

        const [currentTitle, setCurrentTitle] = useState(0);
        const [displayedTitle, setDisplayedTitle] = useState("");
        const [isDeleting, setIsDeleting] = useState(false);

        useEffect(() => {
            const currentText = titles[currentTitle];

            const typingSpeed = isDeleting ? 50 : 100;

            const timer = setTimeout(() => {
                if (!isDeleting) {
                    // Type the title
                    setDisplayedTitle(
                        currentText.substring(0, displayedTitle.length + 1)
                    );

                    // Finished typing
                    if (displayedTitle.length === currentText.length) {
                        setTimeout(() => setIsDeleting(true), 1500);
                    }
                } else {
                    // Delete the title
                    setDisplayedTitle(
                        currentText.substring(0, displayedTitle.length - 1)
                    );

                    // Finished deleting
                    if (displayedTitle.length === 0) {
                        setIsDeleting(false);
                        setCurrentTitle(
                            (previous) => (previous + 1) % titles.length
                        );
                    }
                }
            }, typingSpeed);

            return () => clearTimeout(timer);
        }, [displayedTitle, isDeleting, currentTitle, titles]);


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
        <div className="home-page">
            <main className="home" id="home" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="home-content">

                    <p className="home-eyebrow">
                        {displayedTitle}
                        <span className="typing-cursor">|</span>
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
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
};