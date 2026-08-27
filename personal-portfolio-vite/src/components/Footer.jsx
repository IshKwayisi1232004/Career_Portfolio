import { Github, Linkedin, Envelope } from "react-bootstrap-icons";
import "./Footer.css";

export const Footer = () => {
    return (
        <footer className="portfolio-footer">
            <div className="footer-content">

                <p>© 2026 Ishmael Kwayisi. All rights reserved.</p>

                <div className="footer-links">
                    <a
                        href="https://github.com/IshKwayisi1232004"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <Github />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/ishmael-kwayisi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <Linkedin />
                    </a>

                    <a
                        href="mailto:spyrorocks324@gmail.com"
                        aria-label="Email"
                    >
                        <Envelope />
                    </a>
                </div>

            </div>
        </footer>
    );
};