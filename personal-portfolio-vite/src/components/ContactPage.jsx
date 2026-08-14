import { Container } from "react-bootstrap";
import { Github, Linkedin } from "react-bootstrap-icons";
import spyro from "../assets/SpyroPortfolio.png";
import "./ContactPage.css";

export const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact-content">

                <img 
                    src={spyro} 
                    alt="Spyro" 
                    className="spyro-image" 
                />

                <h2>
                    Contact
                </h2>

                <div className="contact-actions">
                    <a href="#about" className="home-button">
                        About
                    </a>

                    <a href ="#projects" className="home-button">
                        Projects
                    </a>

                    {<a
                        href="https://github.com/IshKwayisi1232004"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label="GitHub"
                    >
                        <Github size={32} />
                    </a>}

                    {<a
                        href="https://github.com/IshKwayisi1232004"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={32} />
                    </a>}
                </div>

            </div>
        </section>
    );
};