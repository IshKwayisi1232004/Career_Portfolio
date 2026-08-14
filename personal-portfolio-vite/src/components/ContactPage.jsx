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

                <div className="contact-info">
                    <h2>
                        Contact
                    </h2>

                    <div className="contact-actions">
                        {<a
                            href="https://github.com/IshKwayisi1232004"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="Github"
                        >
                            <Github size={48} />
                        </a>}

                        {<a
                            href="https://github.com/IshKwayisi1232004"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="Linkedin"
                        >
                            <Linkedin size={48} />
                        </a>}
                    </div>
                </div>

            </div>
        </section>
    );
};