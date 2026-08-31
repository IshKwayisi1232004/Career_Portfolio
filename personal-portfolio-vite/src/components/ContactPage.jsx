import { Container } from "react-bootstrap";
import { Github, Linkedin, Envelope } from "react-bootstrap-icons";
import spyro from "../assets/SpyroPortfolio.png";
import "./ContactPage.css";
import { Link } from "react-router-dom";
import { Navbar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export const Contact = () => {
    return (
        <div className="contact-page">

            <Navbar />

            <main className="contact">
                <div className="contact-content">

                    <img
                        src={spyro}
                        alt="Spyro"
                        className="spyro-image"
                    />

                    <div className="contact-info">
                        <h2>
                            Contact
                        </h2>

                        <div className="contact-actions">
                            <a
                                href="mailto:spyrorocks324@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="email-button"
                            >
                                <Envelope size={22} />
                                <span>spyrorocks324@gmail.com</span>
                            </a>

                            <div className="social-actions">
                                <a
                                    href="https://github.com/IshKwayisi1232004"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    aria-label="Github"
                                >
                                    <Github size={48} />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/ishmael-kwayisi/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    aria-label="Linkedin"
                                >
                                    <Linkedin size={48} />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />

        </div>
    );
};