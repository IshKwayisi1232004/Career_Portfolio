import { Github, Linkedin, Envelope } from "react-bootstrap-icons";
import "./Footer.css";

export const Footer = () => {
    return (
        <footer className="portfolio-footer">
            <div className="footer-content">

                <p>© 2026 John McAdams. All rights reserved.</p>

                <div className="footer-links">
                    <a
                        href="https://github.com/xxxxxxxxxxxx"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <Github />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/xxxxxxxx/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <Linkedin />
                    </a>

                    <a
                        href="mailto:xxxxxxxx@gmail.com"
                        aria-label="Email"
                    >
                        <Envelope />
                    </a>
                </div>

            </div>
        </footer>
    );
};